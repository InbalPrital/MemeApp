var gCanvas
var gCtx

function init() {
  renderMeme()
  renderGallery()
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
  gCtx.strokeStyle = 'white'
  gCtx.fillStyle = 'white'
  gCtx.font = '40px Arial'
  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y)
}

function onNewInput(newTxt) {
  setLineTxt(newTxt)
  renderMeme()
}

function showEditor() {
  var elEditor = document.querySelector('.editor')
  elEditor.style.display = 'block'
  var elGallery = document.querySelector('.gallery')
  elGallery.style.display = 'none'
}
