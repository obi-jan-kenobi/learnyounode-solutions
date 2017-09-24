const Koa = require('koa')
const app = new Koa()

const errorHandler = () => async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    ctx.status = 500
    ctx.body = 'internal server error'
  }
}

app.use(errorHandler())

app.use(async ctx => {
  console.log(ctx.path)
  if (ctx.path === '/error') throw new Error('oooops')
  ctx.body = 'OK'
})

const port = process.argv[2]

app.listen(port)
