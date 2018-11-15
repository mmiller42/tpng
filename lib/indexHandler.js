const fs = require('fs')
const { promisify } = require('util')
const wrap = require('express-async-wrapper')

const readFile = promisify(fs.readFile)
const htmlPromise = readFile(`${__dirname}/index.html`, 'utf8')

const indexHandler = wrap(async (req, res) => {
  const html = await htmlPromise
  res.send(html)
})

module.exports = indexHandler
