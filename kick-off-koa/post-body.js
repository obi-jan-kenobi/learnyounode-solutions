const Koa = require('koa')
const parse = require('co-body')
const app = new Koa()

app.use(async (ctx, next) => {
  const body = yield parse(ctx)
  if (!body.name) ctx.throw()
  ctx.body = body.name.toUpperCase()
})

const port = process.argv[2]

app.listen(port)
