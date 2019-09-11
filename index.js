const path = require('path')
const express = require('express');
const app = express();
const indexRouter = require('./routers/index');
const userRouter = require('./routers/user')

app.set('views', path.join(__dirname, 'views')) // 设置存放模板的目录
app.set('view engine', 'ejs') // 设置模板引擎为 ejs



app.use('/', indexRouter)
app.use('/users', userRouter)

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!')
})


app.listen(3000)

