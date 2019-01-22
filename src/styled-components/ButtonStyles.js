import styled from 'styled-components';

const Button = styled.img`
  input:focus {
    outline: none;
  }
  z-index: 3;
  position: absolute;
  margin: 0 auto;
  left: 0%;
  height: ${props => (props.size ? props.size : '64px')};
  width: ${props => (props.size ? props.size : '64px')};
  opacity: 0.1;
`;

const ButtonExit = styled(Button)`
  float: right;
  height: 80px;
  width: 80px;
  display: inline-block;
  top: 2vh
  left:85vw
  opacity:.5
  :hover {
    opacity: 1;
  }
`;

export { ButtonLeft, ButtonRight, ButtonExit, ButtonUp };
