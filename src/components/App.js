import React from 'react';
import ReactDOM from 'react-dom';
import Character from './Character';
import config from '../react.config';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      characters: [],
      characterData: [],
      characterImages: [],
    };
    fetchCharactersJSON = fetchCharactersJSON.bind(this);
    fetchCharacterJSON = fetchCharacterJSON.bind(this);
  }

  componentDidMount() {
    fetchCharactersJSON()
      .then(characters => {
        this.setState({ characters });
        const images = [];
        Promise.all(
          characters.map((item, index, array) => {
            images.push(getCharacterImageURL(item.name));
            return fetchCharacterJSON(item.url);
          })
        ).then(values => {
          var spinner = document.getElementById('spinner');
          spinner.style.display = 'none';
          this.setState({
            isLoaded: true,
            characterData: values,
            characterImages: images,
          });
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    if (this.state.isLoaded) {
      return this.state.characters.map((element, index, collection) => {
        return (
          <Character
            key={index}
            name={element.name}
            img={this.state.characterImages[index]}
            err={this.state.characterData[index].detail}
            films={this.state.characterData[index].films}
          />
        );
      });
    } else {
      return null;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

function getCharacterImageURL(name) {
  let url = '/notFound.jpeg';
  switch (name) {
    case 'Obi-wan Kenobi':
      url = config.OBI;
      break;
    case 'Luke Skywalker':
      url = config.LUKE;
      break;
    case 'Darth Vader':
      url = config.VADER;
      break;
    case 'R2-D2':
      url = config.R2D2;
      break;
  }
  return url;
}

function fetchCharactersJSON() {
  return new Promise((resolve, reject) => {
    fetch(config.CHARACTERS_JSON_URL)
      .then(response => response.json())
      .then(json => resolve(json.characters))
      .catch(err => reject(err));
  });
}

function fetchCharacterJSON(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(err => reject(err));
  });
}
