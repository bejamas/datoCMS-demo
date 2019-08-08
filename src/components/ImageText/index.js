import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Markdown from 'markdown-to-jsx'
import isEmpty from 'lodash/isEmpty'

import Section from './Section'

const ImageText = ({ image, text }) => {
  return (
    <Section>
      {!isEmpty(text) && <Markdown>{text}</Markdown>}
      <Image fluid={image.fluid} />
    </Section>
  )
}

export const query = graphql`
  fragment ImageTextData on DatoCmsComponentImageText {
    id
    name
    image {
      fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
        ...GatsbyDatoCmsFluid
      }
    }
    text
  }
`

export default ImageText
