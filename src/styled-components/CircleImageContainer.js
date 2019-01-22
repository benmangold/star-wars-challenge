import styled from 'styled-components'

const CircleImage = styled.img`
  width: 100%
`

const CircleImageContainer = styled.div`
  height: 24vh
  width: 24vh
  border-radius: 50%
  overflow: hidden
  -moz-box-shadow:    inset 0 0 10px #000000;
  -webkit-box-shadow: inset 0 0 10px #000000;
  box-shadow:         inset 0 0 10px #000000;
`

export {CircleImageContainer, CircleImage}