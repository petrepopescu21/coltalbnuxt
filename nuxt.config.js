module.exports = {
  /*
  ** Headers of the page
  */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  head: {
    title: 'starter',
    meta: [
      
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1' },
      { hid: 'description', name: 'description', content: 'Colt Alb' }
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=ro'},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
      { rel: 'stylesheet', type: 'text/css', href: 'https://code.getmdl.io/1.3.0/material.light_blue-pink.min.css'}
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' }
}
