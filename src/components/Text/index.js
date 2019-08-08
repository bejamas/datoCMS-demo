import React from 'react'
import { graphql } from 'gatsby'
import Markdown from 'markdown-to-jsx'
import isEmpty from 'lodash/isEmpty'

import Section from './Section'

const Text = ({ text }) => {
  return (
    <Section>
      {!isEmpty(text) && <Markdown>{text}</Markdown>}
    </Section>
  )
}

export const query = graphql`
  fragment TextData on DatoCmsComponentText {
    id
    text
  }
`

export default Text
