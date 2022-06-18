function onShowGallery() {
  showGallery()
}

function onImgSelect(img) {
  setImage(img)
  renderMeme()
  onShowEditor()
}

function renderGallery() {
  var images = getImages()
  console.log('images', images)

  var strHtml = images.map(
    (image) =>
      `<img src="images/${image.id}.jpg" id="${image.id}" class="images img-${image.id}" onclick="onImgSelect(this)" />`
  )
  document.querySelector('.images-gal').innerHTML += strHtml.join('')
}

function onMakeRandom() {
  makeRandom()
  renderMeme()
  onShowEditor()
}
