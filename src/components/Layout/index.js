import React from 'react'
import { ThemeProvider } from 'styled-components'

import SEO from 'components/SEO'
import Header from 'components/Header'
import Main from 'components/Main'
import Footer from 'components/Footer'

import theme from 'utils/theme'

const Layout = ({ pageTitle, pageDescription, location, children }) => (
  <React.Fragment>
    <SEO
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      pathname={location.pathname}
    />
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  </React.Fragment>
)

export default Layout
