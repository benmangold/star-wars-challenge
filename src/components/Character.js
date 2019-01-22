import React from 'react';
import Overlay from './Overlay.js';
import OverlayHeader from './OverlayHeader.js';
import MovieDetails from './MovieDetails';
import ScrollOverProvider from './ScrollOverProvider';

import { ButtonExit } from '../styled-components/ButtonStyles.js';
import Image from '../styled-components/Image';
import {
  CircleImageContainer,
  CircleImage,
} from '../styled-components/CircleImageContainer.js';
import { OverlayText } from '../styled-components/OverlayStyles';

import config from '../react.config.js';

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
      this.fetchFilmData();
    };
    this.turnOverlayOff = () =>
      this.setState({
        overlay: false,
        filmData: [],
        filmDataLoaded: false,
      });
    this.turnOverlayOn = this.turnOverlayOn.bind();
    this.turnOverlayOff = this.turnOverlayOff.bind();
  }

  fetchFilmData() {
    if (this.props.films) {
      let filmData = [];
      Promise.all(
        this.props.films.map((item, index, array) => {
          return new Promise((resolve, reject) => {
            fetch(item)
              .then(response => response.json())
              .then(json => {
                filmData.push(json);
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
        <span onClick={this.turnOverlayOn}>
          <ScrollOverProvider left={'100%'}>
            <CircleImageContainer>
              <CircleImage src={this.props.img} />
            </CircleImageContainer>
          </ScrollOverProvider>
        </span>

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
          <Image src={this.props.img} />
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
