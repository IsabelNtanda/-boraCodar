const btn = document.getElementById('btnMobileMenu')
const nav = document.getElementById('navDisplayMobile')

btn.addEventListener('click', function (event) {
  event.preventDefault()

  nav.classList.toggle('active')
})
