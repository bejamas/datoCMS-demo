import { generateMedia } from 'styled-media-query'

const dimensions = ['xs', 'sm', 'md', 'lg', 'xl']

const breakpoints = {
  xs: 0,
  sm: 48,
  md: 64,
  lg: 76,
  xl: 86
}

const mediaObject = dimensions.reduce(
  (acc, cur) => ({ ...acc, [cur]: `${breakpoints[cur]}em` }),
  {}
)

const media = generateMedia(mediaObject)

export default media
