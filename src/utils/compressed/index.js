const BASE64_MATCH = /^data:image\/(jpg|png|jpeg|webp|apng|bmp|gif|x-icon|svg+xml|tiff);base64/
export default function (fn, file, {
  MAX_WIDTH = 750,
  ratio = 0.6,
  mime = "image/jpeg", // jpeg , webp
  fileType = "blob", // base64
} ={}) {
  let reader = new FileReader()
  let image = new Image()
  let canvas = document.createElement('canvas')
  let context = canvas.getContext('2d')
  if (file instanceof Event) {
    file = file.target.files[0]
    if (!file) return console.error("file 不是一个有效值");
  }

  if (file instanceof File) {
    reader.onloadend = (e) => {
      let readFile = e.target.result
      Image2blob(readFile)
    }
    reader.readAsDataURL(file)
    return
  }
  if (typeof (file) === "string" && !BASE64_MATCH.test(file)) console.error(file, "不是一个有效类型");
  /**获取压缩后的宽度高度 */
   function  ImageRatio(width, height) {
    let isCompression = width < MAX_WIDTH ? false : true
    let canvasWidth = isCompression ? MAX_WIDTH : width
    let canvasHeight = isCompression ? height / (width / MAX_WIDTH) : height
    return { canvasWidth, canvasHeight }
  }

  function Image2blob(readFile, {
    deg = 0
  } = {}){
    image.onload = () => {
      let imageWidth = image.width
      let imageHeight = image.height
      let { canvasWidth, canvasHeight } = ImageRatio(imageWidth, imageHeight)
      // 按宽高比压缩
      canvas.width = canvasWidth
      canvas.height = canvasHeight
      // 旋转
      if (Math.abs(deg) == 90) {
        ({ canvasWidth, canvasHeight } = ImageRatio(imageHeight, imageWidth))
        canvas.width = canvasWidth
        canvas.height = canvasHeight;
        [(canvasWidth), (canvasHeight)] = [canvasHeight, canvasWidth]
        context.rotate(Math.PI / 180 * deg)
        let translate = deg < 0 ? [-canvasWidth, 0] : [0, -canvasHeight]
        context.translate(...translate)
      }
      // 旋转 180 度
      if (Math.abs(deg) == 180) {
        context.rotate(Math.PI / 180 * deg)
        context.translate(-canvasWidth, -canvasHeight)
      }
      // 写入canvas
      context.drawImage(image, 0, 0, canvasWidth, canvasHeight)
      // 宽高
      try {
        if (fileType === 'base64') fn(canvas.toDataURL(mime, ratio))
        if (fileType === 'blob') canvas.toBlob((blob) => fn(blob), mime, ratio)
        if (fileType === 'all') canvas.toBlob((blob) => fn([blob, canvas.toDataURL(mime, ratio)]), mime, ratio)
      } catch (error) {
        console.error(error);
      }

    }

    image.src = readFile

  }
  Image2blob(file)
}