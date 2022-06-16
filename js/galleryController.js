function showGallery() {
  var elGallery = document.querySelector('.gallery')
  elGallery.style.display = 'grid'
  var elEditor = document.querySelector('.editor')
  elEditor.style.display = 'none'
}

// function renderGallery() {
//   // var images = getImages()
//   var strHtml = `<img src="images/1.jpg" id="1" class="images img-1" onclick="onImgSelect(this)" />
//  <img src="images/2.jpg" id="2" class="images img-2" onclick="onImgSelect(this)" />`
//   document.querySelector('.gallery').innerHTML += strHtml
// }

function onImgSelect(img) {
  setImage(img)
  renderMeme()
  showEditor()
}

function renderGallery() {
  var images = getImages()
  console.log('images', images)

  var strHtml = images.map(
    (image) =>
      `<img src="images/${image.id}.jpg" id="${image.id}" class="images img-${image.id}" onclick="onImgSelect(this)" />`
  )
  document.querySelector('.gallery').innerHTML += strHtml.join('')
}
