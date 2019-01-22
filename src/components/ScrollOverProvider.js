import React from 'react';

import {
  ScrollOverContainer,
  ScrollOverContent,
  ScrollOverImage,
} from '../styled-components/ScrollOverStyles.js';

import config from '../react.config';

export default class ScrollOverProvider extends React.Component {
  render() {
    return React.Children.toArray(this.props.children).map((child, index) => {
      return (
        <ScrollOverContainer key={index}>
          <ScrollOverContent zIndex={this.props.zIndex} size={this.props.size}>
            {this.props.render ? (
              this.props.render()
            ) : (
              <ScrollOverImage
                src={config.MAGNIFYING_GLASS_URL}
                display={this.props.display}
                alt='search'
              />
            )}
          </ScrollOverContent>
          {child}
        </ScrollOverContainer>
      );
    });
  }
}
