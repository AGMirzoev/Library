export function burgerMenu() {
	const headerBurger = document.querySelector('.header__burger')
	const headerNav = document.querySelector('.header__nav')
	const headerItem = headerNav.querySelectorAll('a')

	const toggleClass = (element, className) =>
		element.classList.toggle(className)

	headerBurger.addEventListener('click', () => {
		toggleClass(headerBurger, 'header__burger-active')
		toggleClass(headerNav, 'header__nav-visibility')
		toggleClass(document.body, 'no-scroll')
	})

	const closeMenu = () => {
		headerBurger.classList.remove('header__burger-active')
		headerNav.classList.remove('header__nav-visibility')
		document.body.classList.remove('no-scroll')
	}

	headerItem.forEach(e => e.addEventListener('click', closeMenu))

	document.body.addEventListener('click', event => {
		if (
			!headerBurger.contains(event.target) &&
			!headerNav.contains(event.target)
		)
			closeMenu()
	})
}
