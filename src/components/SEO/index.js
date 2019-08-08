import React from 'react'
import { StaticQuery, withPrefix, graphql } from 'gatsby'
import Helmet from 'react-helmet'

export default ({ pageTitle, pageDescription, pathname = '/', ogType }) => (
  <StaticQuery
    query={graphql`
      query SeoQuery {
        site {
          siteMetadata {
            name
            siteUrl
            title
            description
            seo {
              separator
              og {
                fbAppId
                type
                title
                description
                image
              }
              twitter {
                creator
                card
              }
            }
          }
        }
      }
    `}
    render={data => {
      const {
        name,
        siteUrl,
        title,
        description,
        seo: { separator, og, twitter }
      } = data.site.siteMetadata

      return (
        <Helmet>
          <title>
            {pageTitle ? `${pageTitle} ${separator} ${name}` : title}
          </title>
          <meta name='description' content={pageDescription || description} />
          <meta name='image' content={siteUrl + withPrefix(og.image)} />

          {/* OpenGraph tags */}
          <meta property='fb:app_id' content={og.fbAppId} />
          <meta property='og:url' content={siteUrl + pathname} />
          <meta property='og:type' content={ogType || og.type} />
          <meta property='og:title' content={og.title || title} />
          <meta
            property='og:description'
            content={pageDescription || og.description || description}
          />
          <meta property='og:image' content={siteUrl + withPrefix(og.image)} />

          {/* Twitter Card tags */}
          {twitter &&
            twitter.card && <meta name='twitter:card' content={twitter.card} />}
          {twitter &&
            twitter.creator && (
            <meta name='twitter:creator' content={twitter.creator} />
          )}
          <meta name='twitter:title' content={title} />
          <meta
            name='twitter:description'
            content={pageDescription || description}
          />
          <meta name='twitter:image' content={siteUrl + withPrefix(og.image)} />
        </Helmet>
      )
    }}
  />
)
