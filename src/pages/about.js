import React from 'react'
import styled from 'styled-components'

import Layout from 'components/Layout'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

export default ({ location }) => (
  <Layout
    pageTitle='About'
    pageDescription='about desc: Lorem ipsum dolor sit amet'
    location={location}
  >
    <div>
      <Title>This is about page.</Title>
    </div>
  </Layout>
)
