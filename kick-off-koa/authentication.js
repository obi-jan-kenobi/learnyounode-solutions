const Koa = require('koa')
const parse = require('co-body')
const session = require('koa-session')
const app = new Koa()

const form = '<form action="/login" method="POST">\
  <input name="username" type="text" value="username">\
  <input name="password" type="password" placeholder="The password is \'password\'">\
  <button type="submit">Submit</button>\
</form>';

app.keys = ['secret1', 'secret2', 'secret3']

app.use(session(app))

app.use(async (ctx, next) => {
  if (ctx.request.path !== '/') return await next()
  if (ctx.session.authenticated) return ctx.body = 'hello world'
  return ctx.status = 401
})

app.use(async (ctx, next) => {
  if (ctx.request.path !== '/login') return await next()
  if (ctx.request.method === 'GET') return ctx.body = form
  if (ctx.request.method === 'POST') {
    const {username, password} = await parse(ctx)
    if (username === 'username' && password === 'password') {
      ctx.session.authenticated = true
      ctx.redirect('/')
    } else {
      return ctx.status = 400
    }
  }
})

app.use(async (ctx, next) => {
  if (ctx.request.path !== '/logout') return await next()
  ctx.session.authenticated = false
  ctx.redirect('/login')
})

const port = process.argv[2]

app.listen(port)

