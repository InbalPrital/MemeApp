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
  var align1 = currMeme.lines[0].align
  var align2 = currMeme.lines[1].align
  base_image = new Image()
  base_image.onload = function () {
    gCtx.drawImage(base_image, 0, 0)
    if (gDoneEditing === false && gMeme.selectedLineIdx === 0) {
      drawRect(10, 10)
    }
    if (gDoneEditing === false && gMeme.selectedLineIdx === 1) {
      drawRect(10, 360)
    }
    drawText(memeTxt1, align1, 50, 0)
    drawText(memeTxt2, align2, 400, 1)
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

function drawRect(x, y) {
  gCtx.beginPath()
  gCtx.rect(x, y, 460, 60)
  gCtx.fillStyle = 'rgba(0,0,0,0.2)'
  gCtx.fillRect(x, y, 460, 60)
  gCtx.strokeStyle = 'white'
  gCtx.stroke()
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

function onAlignLeft() {
  alignLeft()
  renderMeme()
}

function onAlignRight() {
  alignRight()
  renderMeme()
}

function onCleanLine() {
  onNewInput('')
  setLineTxt('')
  renderMeme()
}

function onDoneEditing() {
  doneEdinting()
  renderMeme()
}
