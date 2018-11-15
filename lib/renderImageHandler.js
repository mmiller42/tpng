const wrap = require('express-async-wrapper')
const createTransparentImage = require('./createTransparentImage')

const renderImageHandler = wrap(async (req, res) => {
  const [, width, height] = req.params.dimensions.match(/^(\d+)x(\d+)$/)
  const basename = req.params.filename ? req.params.filename.match(/^(.*?)(\.png)?$/i)[1] : `${width}x${height}`
  const image = await createTransparentImage({ width: Number(width), height: Number(height) })
  const buffer = await image.getBufferAsync('image/png')
  res.contentType('png')
  res.set('Content-Disposition', `attachment; filename=${basename}.png`)
  res.end(buffer, 'binary')
})

module.exports = renderImageHandler
