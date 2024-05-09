export function favoritesTabs() {
	const favoritesLabels = document.querySelectorAll('.favorites__label')
	const favoritesBooks = document.querySelectorAll('.favorites__book')

	function fadeOut(element) {
		element.style.opacity = 0
		setTimeout(function () {
			element.style.display = 'none'
		}, 500)
	}

	function fadeIn(element) {
		element.style.display = 'block'
		element.style.opacity = 1
	}

	function changeTab(newActiveTab) {
		favoritesBooks.forEach(function (book) {
			if (book.id !== newActiveTab) {
				fadeOut(book)
			}
		})
		fadeIn(document.getElementById(newActiveTab))
	}

	favoritesLabels.forEach(function (label) {
		label.addEventListener('click', function () {
			const selectedTab = 'tab-' + label.getAttribute('data-tab')
			changeTab(selectedTab)
		})
	})

	// Инициализация первого активного таба
	fadeIn(document.getElementById('tab-winter'))

	// Инициализируем первый таб как активный при загрузке страницы
	document.addEventListener('DOMContentLoaded', function () {
		changeTab('tab-winter') // Первый таб по умолчанию, или любой другой, который вы хотите сделать активным
	})
}
