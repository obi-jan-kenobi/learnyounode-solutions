const koa = require('koa')
const app = new koa()

app.use(async (ctx, next) => {
  ctx.body = 'hello koa'
})

const port = process.argv[2]

app.listen(port)
