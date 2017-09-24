const Koa = require('koa')
const app = new Koa()

app.keys = ['secret', 'keys']

const options = {
  signed: true
}

app.use(async ctx => {
  const cookie = ctx.cookies.get('view', options)
  const viewCount = cookie ? +cookie + 1 : 1
  ctx.cookies.set('view', viewCount)
  ctx.body = `${viewCount} views`
})

const port = process.argv[2]

app.listen(port)
