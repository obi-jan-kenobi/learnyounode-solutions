const Koa = require('koa')
const views = require('co-views')
const app = new Koa()

const render = views(__dirname + '/views', {
  ext: 'ejs'
})

const user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuck',
  },
  species: 'ferret',
  age: 3
}

app.use(async ctx => ctx.body = await render('index', {user}))

const port = process.argv[2]

app.listen(port)
