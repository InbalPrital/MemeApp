var gCanvas
var gCtx

function init() {
  renderMeme()
}

function renderMeme() {
  gCanvas = document.querySelector('.my-meme')
  gCtx = gCanvas.getContext('2d')
  var currMeme = getMeme()
  console.log('currMemeId', currMeme.selectedImgId)
  var memeTxt = currMeme.lines[0].txt
  base_image = new Image()

  base_image.onload = function () {
    gCtx.drawImage(base_image, 0, 0)
    drawText(memeTxt, 40, 50)
  }
  base_image.src = `images/${currMeme.selectedImgId}.jpg`
}

function drawText(text, x, y) {
  gCtx.lineWidth = 2
  gCtx.strokeStyle = 'brown'
  gCtx.fillStyle = 'black'
  gCtx.font = '40px Arial'
  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y)
}

function onNewInput(newTxt) {
  setLineTxt(newTxt)
  renderMeme()
}
