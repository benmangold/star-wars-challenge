import styled from 'styled-components';

const ScrollOverContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ScrollOverContent = styled.div`
  margin: 0 auto;
  z-index: ${props => (props.zIndex ? props.zIndex : 0)}
  position: absolute;
  top: ${props => (props.top ? props.top : '50%')};
  left: ${props => (props.left ? props.left : '50%')};
  transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  height: ${props => (props.size ? props.size : '10vh')};
  width: ${props => (props.size ? props.size : '10vh')};
  opacity: ${props => (props.opacity ? props.opacity : 0)};
  ${ScrollOverContainer}:hover & {
    opacity: ${props => (props.opacityHover ? props.opacityHover : 1)};
  }
`;

const ScrollOverImage = styled.img`
  max-height: -webkit-fill-available;
`;

export { ScrollOverContent, ScrollOverContainer, ScrollOverImage };
