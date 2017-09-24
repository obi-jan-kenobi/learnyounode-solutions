const koa = require('koa')
const app = new koa()

app.use(async (ctx, next) => {
  if (ctx.path === '/') return ctx.body = 'hello koa'
  if (ctx.path === '/404') return ctx.body = 'page not found'
  if (ctx.path === '/500') return ctx.body = 'internal server error'
})

const port = process.argv[2]

app.listen(port)
