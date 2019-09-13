/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project',
        path:'./data/projects'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'bio',
        path:'./data/bio'
      }
    },     
    'gatsby-transformer-json',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components'

  ]
}
