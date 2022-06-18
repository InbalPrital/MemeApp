var gDoneEditing = false

var gMeme = {
  selectedImgId: 2,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I love it when',
      size: 35,
      align: 30,
      color: 'black',
    },
    {
      txt: 'we eat Falafel',
      size: 35,
      align: 100,
      color: 'black',
    },
  ],
}

function setLineTxt(newTxt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = newTxt
  return gMeme
}

function getImages() {
  return gImgs
}

function setImage(img) {
  gMeme.selectedImgId = +img.id
  return gMeme
}

function setColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].color = color
  return gMeme
}

function increaseFont() {
  gMeme.lines[gMeme.selectedLineIdx].size += 5
  return gMeme
}

function decreaseFont() {
  gMeme.lines[gMeme.selectedLineIdx].size -= 5
  return gMeme
}

function switchLine() {
  gMeme.selectedLineIdx === 0
    ? (gMeme.selectedLineIdx = 1)
    : (gMeme.selectedLineIdx = 0)
}

function alignLeft() {
  gMeme.lines[gMeme.selectedLineIdx].align -= 25
  return gMeme
}

function alignRight() {
  gMeme.lines[gMeme.selectedLineIdx].align += 25
  return gMeme
}

function doneEdinting() {
  gDoneEditing = true
}

function makeRandom() {
  gMeme.selectedImgId = getRandomInt(1, 18)
  var linesNum = getRandomInt(1, 2)
  var randomSize = getRandomInt(20, 40)
  var newRandomColor = randomColor()
  gMeme.lines[0].txt = memesSentences[getRandomInt(0, 14)]
  gMeme.lines[0].size = randomSize
  gMeme.lines[0].color = newRandomColor
  if (linesNum === 2) {
    gMeme.lines[1].txt = memesSentences[getRandomInt(0, 14)]
    gMeme.lines[1].size = randomSize
    gMeme.lines[1].color = newRandomColor
  } else {
    gMeme.lines[1].txt = ' '
  }
}

function downloadCanvas(elLink) {
  const data = gCanvas.toDataURL()
  console.log('data', data)
  elLink.href = data
  elLink.download = 'My-Drawing'
}

function onImgInput(ev) {
  loadImageFromInput(ev, renderImg)
}

function loadImageFromInput(ev, onImageReady) {
  var reader = new FileReader()
  reader.onload = function (event) {
    var img = new Image()
    img.src = event.target.result
    img.onload = onImageReady.bind(null, img)
  }
  reader.readAsDataURL(ev.target.files[0])
}

function renderImg(img) {
  gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}

function showEditor() {
  var elEditor = document.querySelector('.editor')
  elEditor.style.display = 'flex'
  var elGallery = document.querySelector('.gallery')
  elGallery.style.display = 'none'
  var elEditorBtn = document.querySelector('.editor-btn')
  elEditorBtn.classList.add('chosen-page')
  var elGalleryBtn = document.querySelector('.gallery-btn')
  elGalleryBtn.classList.remove('chosen-page')
}

function showGallery() {
  var elGallery = document.querySelector('.gallery')
  elGallery.style.display = 'grid'
  var elEditor = document.querySelector('.editor')
  elEditor.style.display = 'none'
  var elGalleryBtn = document.querySelector('.gallery-btn')
  elGalleryBtn.classList.add('chosen-page')
  var elEditorBtn = document.querySelector('.editor-btn')
  elEditorBtn.classList.remove('chosen-page')
}
