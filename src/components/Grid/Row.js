import React from 'react'
import { Flex } from '@rebass/grid'

const Row = props => <Flex {...props} />

Row.defaultProps = {
  mx: -4,
  flexWrap: 'wrap'
}

export default Row
