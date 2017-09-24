const fs = require('fs')
const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  if (ctx.request.path === '/json') ctx.body = {
    foo: 'bar'
  }
  if (ctx.request.path === '/stream') ctx.body = fs.createReadStream(process.argv[3]) 
})

const port = process.argv[2]

app.listen(port)
