const Koa = require('koa')
const app = new Koa()

const responseTime = () => async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
}

const upperCaser = () => async (ctx, next) => {
  await next()
  console.log(ctx)
  if (ctx.body) ctx.body = ctx.body.toUpperCase()
}


app.use(responseTime())
app.use(upperCaser())

app.use(async ctx => {
  ctx.body = 'hello koa'
})

const port = process.argv[2]

app.listen(port)
