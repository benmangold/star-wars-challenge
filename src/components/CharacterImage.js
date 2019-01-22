import React from 'react';


import {
  CircleImageContainer,
  CircleImage,
} from '../styled-components/CircleImageContainer.js';
import ScrollOverProvider from './ScrollOverProvider';


export default props => {
  return (
    <span onClick={props.click}>
      <ScrollOverProvider left={'100%'}>
        <CircleImageContainer>
          <CircleImage src={props.img} alt={props.name}/>
        </CircleImageContainer>
      </ScrollOverProvider>
    </span>
  );
};
