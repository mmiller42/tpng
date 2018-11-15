const createApp = require('express')
const createHttpErrorsMiddleware = require('http-errors-express').default
const indexHandler = require('./indexHandler')
const renderImageHandler = require('./renderImageHandler')

const app = createApp()

app.get('/:dimensions(\\d+x\\d+)', renderImageHandler)
app.get('/:dimensions(\\d+x\\d+)/:filename([\\w\\.-]+)', renderImageHandler)
app.get('*', indexHandler)

app.use(createHttpErrorsMiddleware())

app.listen(process.env.PORT || 8080)
