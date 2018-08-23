module.exports = {
  siteMetadata: {
    title: 'Can Counter',
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
  	{
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "./src/favicon.png",

      // WebApp Manifest Configuration
      appName: 'Can Counter',
      appDescription: null,
      developerName: null,
      developerURL: null,
      dir: 'auto',
      lang: 'en-US',
      background: '#fff',
      theme_color: '#fff',
      display: 'standalone',
      orientation: 'any',
      start_url: '/?homescreen=1',
      version: '1.0',

      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }
  }],
  pathPrefix: `/can_counter`,
}
