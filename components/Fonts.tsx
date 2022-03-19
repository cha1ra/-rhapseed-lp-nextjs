import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'rennie-beanie';
        src: url('./fonts/ReenieBeanie-Regular.ttf') format('truetype');
      }
    `}
  />
)
export default Fonts
