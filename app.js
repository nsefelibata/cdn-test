var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
const { resolve } = require('path')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('*', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'content-type')
    res.setHeader('Access-control-Allow-Methods', 'DELETE,POST,GET,PUT,OPTIONS')
    next()
})

app.post('/download', (req, res) => {
    res.setHeader('Content-Disposition', 'attachment; filename=test.js')
    res.cookie('isLoading', 'hide', {
        maxAge: 200000,
        expires: Date.now() + 60 * 60 * 24
    })
    res.download(resolve('public/static/js/0.bundle.js'), 'test.js', (err) => {
        if (err) console.log(err)
    })
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

module.exports = app
