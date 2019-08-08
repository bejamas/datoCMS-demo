import React from 'react'
import { Box } from '@rebass/grid'

const Column = props => <Box {...props} />

Column.defaultProps = {
  px: 4,
  width: [1]
}

export default Column
