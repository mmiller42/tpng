const Jimp = require('jimp')

const createImage = ({ width, height }) => (
  new Promise((resolve, reject) => {
    new Jimp(width, height, (err, image) => {
      if (err) {
        reject(err)
      } else {
        resolve(image)
      }
    })
  })
)

const createTransparentImage = async imageDimensions => {
  const image = await createImage(imageDimensions)
  return image.opacity(0)
}

module.exports = createTransparentImage
