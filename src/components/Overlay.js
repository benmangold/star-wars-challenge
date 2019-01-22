import React from 'react';

import { Overlay } from '../styled-components/OverlayStyles.js';

export default props => {
  return (
    <Overlay overlay={props.overlay}>
      {props.children}
    </Overlay>
  );
};
