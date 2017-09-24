const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  if (ctx.request.type === 'application/json') {
    return ctx.body = {
      message: 'hi!'
    } 
  } else {
    return ctx.body = 'ok'
  }
})

const port = process.argv[2]

app.listen(port)
