import React from 'react';

import {
  OverlayHeader,
} from '../styled-components/OverlayStyles.js';

export default props => <OverlayHeader onClick={props.onClick}>{props.render()}</OverlayHeader>;