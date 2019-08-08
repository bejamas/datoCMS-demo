import React from 'react'
import styled from 'styled-components'

import Layout from 'components/Layout'
import { Container, Row, Column } from 'components/Grid'

import gatsbyLogo from 'assets/svg/gatsby.svg'

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

export default ({ location }) => (
  <Layout pageTitle='Home' location={location}>
    <Container>
      <Row>
        <Column width={[1]}>
          <Title>This is home page.</Title>
        </Column>
        <Column width={[1]}>
          <img src={gatsbyLogo} alt='gatsby' />
        </Column>
      </Row>
    </Container>
  </Layout>
)
