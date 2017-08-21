import Koa from 'koa'
import Router from 'koa-router'
import { Nuxt, Builder } from 'nuxt'

var prismic = require('./prismic.js')

const app = new Koa()
const router = new Router()

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

var api_data = {}

router.get('/api/data', async (ctx) => {
    if(api_data.labels == undefined) {
      api_data = await prismic.getRawData()
    }
    ctx.body = api_data
});

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

// Instantiate nuxt.js
const nuxt = new Nuxt(config)

// Build in development
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build().catch(e => {
    console.error(e) // eslint-disable-line no-console
    process.exit(1)
  })
}
app.use(router.routes())
app.use(ctx => {
  ctx.status = 200 // koa defaults to 404 when it sees that status is unset
  ctx.customData = {message:'Hello'}
  return new Promise((resolve, reject) => {
    ctx.res.on('close', resolve)
    ctx.res.on('finish', resolve)
    nuxt.render(ctx.req, ctx.res, promise => {
      // nuxt.render passes a rejected promise into callback on error.
      promise.then(resolve).catch(reject)
    })
  })
})

app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
