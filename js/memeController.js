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
  var memeTxt1 = currMeme.lines[0].txt
  var memeTxt2 = currMeme.lines[1].txt
  base_image = new Image()
  base_image.onload = function () {
    gCtx.drawImage(base_image, 0, 0)
    drawText(memeTxt1, 40, 50, 0)
    drawText(memeTxt2, 40, 400, 1)
  }
  base_image.src = `images/${currMeme.selectedImgId}.jpg`
}

function drawText(text, x, y, idx) {
  gCtx.lineWidth = 2
  gCtx.strokeStyle = gMeme.lines[idx].color
  gCtx.fillStyle = gMeme.lines[idx].color
  gCtx.font = gMeme.lines[idx].size + 'px Arial'
  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y)
}

function onNewInput(newTxt) {
  setLineTxt(newTxt)
  renderMeme()
}

function showEditor() {
  var elEditor = document.querySelector('.editor')
  elEditor.style.display = 'flex'
  var elGallery = document.querySelector('.gallery')
  elGallery.style.display = 'none'
}

function onSetColor(color) {
  setColor(color)
  renderMeme()
}

function onIncreaseFont() {
  increaseFont()
  renderMeme()
}

function onDecreaseFont() {
  decreaseFont()
  renderMeme()
}

function onSwitchLine() {
  switchLine()
  renderMeme()
}
