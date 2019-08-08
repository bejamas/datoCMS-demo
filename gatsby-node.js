const path = require('path')
const isEmpty = require('lodash/isEmpty')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const DEFAULT_LANG = process.env.DEFAULT_LANG
const PAGE_TEMPLATE = path.resolve('src/templates/page.js')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query {
          pages: allDatoCmsPage {
            edges {
              node {
                id
                name
                locale
                slug
                _allSlugLocales {
                  locale
                  value
                }
                seo {
                  description
                  title
                }
              }
            }
          }
        }
      `)
        .then(result => {
          if (result.errors) {
            reject(result.errors)
          }
          const { pages } = result.data

          !isEmpty(pages) &&
          !isEmpty(pages.edges) &&
          pages.edges.map(({ node }) => {
            const { id, slug, seo, locale } = node
            const parsedSlug = slug === 'home' ? '' : `${slug}/`
            const pagePath = locale === DEFAULT_LANG ? `/${parsedSlug}` : `/${locale}/${parsedSlug}`

            console.log('TCL: exports.createPages -> pagePath', pagePath)
            createPage({
              path: pagePath,
              component: PAGE_TEMPLATE,
              context: {
                id,
                seo,
                lang: locale
              }
            })
          })
        })
    )
  })
}

exports.onCreateWebpackConfig = ({ stage, plugins, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {}
    }
  })
}
