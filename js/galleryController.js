renderGallery()

function renderGallery() {
  // var images = getImages()
  var strHtml = `<img src="images/1.jpg" id="1" class="images img_1" onclick="onImgSelect(this)" />
 <img src="images/2.jpg" id="2" class="images img_2" onclick="onImgSelect(this)" />`
  document.querySelector('.gallery').innerHTML += strHtml
}

// var gImgs = [
//   { id: 1, url: 'imges/1.jpg', keywords: ['funny', 'cat'] },
//   { id: 2, url: 'imges/2.jpg', keywords: ['funny', 'cat'] },

function onImgSelect(img) {
  setImage(img)
  console.log('gMeme after', gMeme)
  renderMeme()
}
