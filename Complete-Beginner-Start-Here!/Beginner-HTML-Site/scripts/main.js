 /* change firefox image */

 const firefoxImg = document.querySelector('.firefox-img')

function changeFirefoxImg() {
  const src = firefoxImg.getAttribute('src')

  if (src === './images/firefox-icon.png') {
    firefoxImg.setAttribute('src', './images/firefox2.png')
  } else {
    firefoxImg.setAttribute('src', './images/firefox-icon.png')
  }
}

firefoxImg.addEventListener('click', changeFirefoxImg)


/* change user of title */

const title = document.querySelector('.title')
const changeUserButton = document.querySelector('.change-user-button')

function setUser() {
  const user = prompt('Please enter your name.')

  if (!user) return setUser()

  title.textContent = `Mozilla is cool, ${user}`

  localStorage.setItem('user', user)
}

function getUser() {
  const user = localStorage.getItem('user')
  if (!user) {
    return setUser()
  }

  title.textContent = `Mozilla is cool, ${user}`
}

getUser()
changeUserButton.addEventListener('click', setUser)
