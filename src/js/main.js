const pictureInput = document.querySelector('.input__picture')
const pictureBox = document.querySelector('.picture__box')
const nameInput = document.querySelector('.input__name')

// pictureInput.addEventListener('change', () => {
// 	const newPictureReader = new FileReader()
// 	newPictureReader.readAsDataURL(pictureInput.files[0])
// 	newPictureReader.addEventListener('load', () => {
// 		const pictureURL = newPictureReader.result
// 		const newImg = new Image()
// 		newImg.src = pictureURL
// 		newImg.classList.add('picture__item')
// 		pictureBox.appendChild(newImg)
// 	})
// })

pictureInput.addEventListener('change', () => {
	const newPictureReader = new FileReader()
	newPictureReader.readAsDataURL(pictureInput.files[0])
	newPictureReader.addEventListener('load', () => {
		const pictureURL = newPictureReader.result
		const newDiv = document.createElement('div')
		const newName = document.createElement('div')
		const playerName = document.createElement('p')
		newDiv.style.backgroundImage = `url(${pictureURL})`
		newDiv.classList.add('picture__item')
		newName.classList.add('picture__name')
		playerName.textContent = nameInput.value
		playerName.classList.add('picture__name-paragraph')
		newName.appendChild(playerName)
		newDiv.appendChild(newName)
		pictureBox.appendChild(newDiv)
	})
})
