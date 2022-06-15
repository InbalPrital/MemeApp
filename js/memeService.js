var gImgs = [
  { id: 1, url: 'imges/1.jpg', keywords: ['funny', 'cat'] },
  { id: 2, url: 'imges/2.jpg', keywords: ['funny', 'cat'] },
]

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      size: 20,
      align: 'left',
      color: 'red',
    },
  ],
}

function getMeme() {
  return gMeme
}

function setLineTxt(newTxt) {
  gMeme.lines[0].txt = newTxt
  return gMeme
}

function getImages() {
  return gImgs
}

function setImage(img) {
  gMeme.selectedImgId = +img.id
  return gMeme
}
