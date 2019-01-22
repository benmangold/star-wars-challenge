import React from 'react';
import config from '../react.config.js';

import CharacterImage from './CharacterImage';
import Overlay from './Overlay.js';
import OverlayHeader from './OverlayHeader.js';
import MovieDetails from './MovieDetails';

import { ButtonExit } from '../styled-components/ButtonStyles.js';
import Image from '../styled-components/Image';
import { OverlayText } from '../styled-components/OverlayStyles';

export default class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmData: [],
      overlay: false,
      filmDataLoaded: false,
      error: false,
    };

    this.turnOverlayOn = () => {
      this.setState({
        overlay: true,
      });
      if (!this.state.filmDataLoaded) {
        this.fetchFilmData();
      }
    };
    this.turnOverlayOff = () =>
      this.setState({
        overlay: false,
      });

    this.turnOverlayOn = this.turnOverlayOn.bind();
    this.turnOverlayOff = this.turnOverlayOff.bind();
  }

  fetchFilmData() {
    if (this.props.films) {
      const filmData = [];
      Promise.all(
        this.props.films.map((item, index, array) => {
          return new Promise((resolve, reject) => {
            fetch(item)
              .then(film => film.json())
              .then(film => {
                filmData.push(film);
                resolve();
              })
              .catch(err => reject(err));
          });
        })
      )
        .then(() => {
          this.setState({
            films: this.props.films,
            filmData: filmData,
            filmDataLoaded: true,
          });
        })
        .catch(err => console.log(err));
    } else {
      this.setState({
        error: true,
      });
    }
  }

  render() {
    return (
      <div>
        <CharacterImage
          click={this.turnOverlayOn}
          img={this.props.img}
          name={this.props.name}
        />

        <Overlay overlay={this.state.overlay}>
          <OverlayHeader
            render={() => (
              <ButtonExit
                onClick={this.turnOverlayOff}
                type={'image'}
                src={config.X_BUTTON_URL}
              />
            )}
          />
          <OverlayText>{`${this.props.name}`}</OverlayText>
          <Image src={this.props.img} alt={this.props.name} />
          <MovieDetails
            filmDataLoaded={this.state.filmDataLoaded}
            filmData={this.state.filmData}
            error={this.state.error}
          />
        </Overlay>
      </div>
    );
  }
}
