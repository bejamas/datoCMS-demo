import React from 'react'
import { graphql } from 'gatsby'
import isEmpty from 'lodash/isEmpty'

import ConnectDatoCmsBody from 'utils/connectDatoCmsBody'

const renderPageComponents = components => {
  if (components) {
    return components.map(component => <ConnectDatoCmsBody key={component.id} {...component} />)
  }

  return <h2>This Page don't have any Components in Contentfull</h2>
}

const Page = ({ data, pageContext }) => {
  const { page } = data || {}
  console.log('TCL: Page -> page', page)

  return (
    <>
      {!isEmpty(page) ? renderPageComponents(page.body) : <h2>Ups.. Something went wrong with DatoCMS data</h2>}
    </>
  )
}

export const pageQuery = graphql`
  query pageQuery($id: String!) {
    page: datoCmsPage(id: {eq: $id}) {
      body {
        __typename
        ...ImageTextData
        ...TextData
      }
    }
  }
`
export default Page
