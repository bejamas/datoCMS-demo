import React from 'react'
import styled from 'styled-components'
import { Box } from '@rebass/grid'
import media from 'utils/media'

const StyledBox = styled(Box)`
  max-width: 100%;
  display: block;

  ${media.greaterThan('xs')`
    max-width: 35rem;
  `};

  ${media.greaterThan('sm')`
    max-width: 46.25rem;
  `};

  ${media.greaterThan('md')`
    max-width: 56.25rem;
  `};

  ${media.greaterThan('lg')`
    max-width: 65.5rem;
  `};

  ${media.greaterThan('xl')`
    max-width: 85rem;
  `};
`

const Container = props => <StyledBox {...props} />

Container.defaultProps = {
  mx: 'auto',
  px: 4
}

export default Container
