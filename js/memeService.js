var gDoneEditing = false

var gImgs = [
  { id: 1, url: 'imges/1.jpg', keywords: ['funny', 'cat'] },
  { id: 2, url: 'imges/2.jpg', keywords: ['funny', 'cat'] },
  { id: 3, url: 'imges/3.jpg', keywords: ['funny', 'cat'] },
  { id: 4, url: 'imges/4.jpg', keywords: ['funny', 'cat'] },
  { id: 5, url: 'imges/5.jpg', keywords: ['funny', 'cat'] },
  { id: 6, url: 'imges/6.jpg', keywords: ['funny', 'cat'] },
  { id: 7, url: 'imges/7.jpg', keywords: ['funny', 'cat'] },
  { id: 8, url: 'imges/8.jpg', keywords: ['funny', 'cat'] },
  { id: 9, url: 'imges/9.jpg', keywords: ['funny', 'cat'] },
  { id: 10, url: 'imges/10.jpg', keywords: ['funny', 'cat'] },
  { id: 11, url: 'imges/11.jpg', keywords: ['funny', 'cat'] },
  { id: 12, url: 'imges/12.jpg', keywords: ['funny', 'cat'] },
  { id: 13, url: 'imges/13.jpg', keywords: ['funny', 'cat'] },
  { id: 14, url: 'imges/14.jpg', keywords: ['funny', 'cat'] },
  { id: 15, url: 'imges/15.jpg', keywords: ['funny', 'cat'] },
  { id: 16, url: 'imges/16.jpg', keywords: ['funny', 'cat'] },
  { id: 17, url: 'imges/17.jpg', keywords: ['funny', 'cat'] },
  { id: 18, url: 'imges/18.jpg', keywords: ['funny', 'cat'] },
]

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
      align: 150,
      color: 'black',
    },
  ],
}

function getMeme() {
  return gMeme
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

// function saveAndRestore() {
//   gCtx.save()
//   gCtx.restore()
// }

function downloadCanvas(elLink) {
  const data = gCanvas.toDataURL()
  console.log('data', data)
  elLink.href = data
  elLink.download = 'My-Drawing'
}

// The next 2 functions handle IMAGE UPLOADING to img tag from file system:
function onImgInput(ev) {
  loadImageFromInput(ev, renderImg)
}
//                               CallBack func will run on success load of the img
function loadImageFromInput(ev, onImageReady) {
  var reader = new FileReader()
  //After we read the file
  reader.onload = function (event) {
    var img = new Image() // Create a new html img element
    img.src = event.target.result // Set the img src to the img file we read
    //Run the callBack func , To render the img on the canvas
    img.onload = onImageReady.bind(null, img)
  }
  reader.readAsDataURL(ev.target.files[0]) // Read the file we picked
}

function renderImg(img) {
  //Draw the img on the canvas
  gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
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
