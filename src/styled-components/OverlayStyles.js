import styled from 'styled-components';

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  display: ${props => (props.overlay ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  text-align: center;
`;

const OverlayText = styled.div`
  color: #ffffff;
  font-family: Sans-serif;
  font-size: 120%;
`;

const OverlayHeader = styled.div`
  padding-top: 10px;
  height: 40px;
  margin: 0 10px 10px;
`;

export {
  Overlay,
  OverlayHeader,
  OverlayText
};
