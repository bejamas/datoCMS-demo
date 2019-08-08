import React from 'react'

import ImageText from 'components/ImageText'
import Text from 'components/Text'

const ComponentNotFound = ({ __typename }) => (
  <p>
    Component <strong>{__typename}</strong> Not Found
  </p>
)

const body = {
  DatoCmsComponentImageText: ImageText,
  DatoCmsComponentText: Text,
  NotFound: ComponentNotFound
}

export default props => {
  const SelectedComponent = typeof body[props.__typename] === 'function' ? body[props.__typename] : body.NotFound
  return <SelectedComponent {...props} />
}
