const Koa = require('koa')
const session = require('koa-session')
const app = new Koa()

app.keys = ['secret', 'keys']

app.use(session({signed: true}, app))

app.use(async ctx => {
  const n = ctx.session.views || 0
  ctx.session.views = n + 1
  ctx.body = `${ctx.session.views} views`
})

const port = process.argv[2]

app.listen(port)
