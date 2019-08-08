require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const siteUrl = process.env.URL || 'localhost:3000'

module.exports = {
  siteMetadata: {
    name: `Bejamas Starter`,
    siteUrl: siteUrl,
    title: `Bejamas Gatsby with styled components`,
    description: `Short description of the website, max 255 characters`,
    seo: {
      separator: `-`,
      og: {
        fbAppId: `123`,
        type: `website`,
        title: `title`,
        description: `description`,
        image: `/img/og-cover.png`
      },
      twitter: {
        creator: `bejamas_io`,
        card: `summary_large_image`
      }
    }
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
        omitGoogleFont: true
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bejamas Starter`,
        short_name: `BeStarter`, // Max 12 characters
        start_url: `/?utm_source=a2hs`,
        background_color: `#ffffff`,
        theme_color: `#ffff00`,
        display: `minimal-ui`,
        icon: `static/img/icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            `Content-Security-Policy: frame-ancestors 'none';`,
            `X-Frame-Options: DENY`,
            `X-XSS-Protection: 1; mode=block`,
            `X-Content-Type-Options: nosniff`,
            `Referrer-Policy: no-referrer`,
            `Expect-CT: max-age=604800`,
            `Feature-Policy: accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; payment 'none'; usb 'none'`,
            `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
          ]
        },
        mergeSecurityHeaders: false
      }
    },
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: true, // you can disable scripts sha256 hashes
        mergeStyleHashes: true, // you can disable styles sha256 hashes
        mergeDefaultDirectives: true,
        directives: {
          'script-src': "'self' www.google-analytics.com",
          'style-src': "'self' 'unsafe-inline'",
          'img-src': "'self' data: www.google-analytics.com"
          // you can add your directives or override defaults
        }
      }
    }
  ]
}
