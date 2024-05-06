export function modalPopap() {
	// Переменные для кнопок, модальных окон и закрытия
	const profileBtn = document.querySelector('.header__btn')
	const headerModal = document.querySelector('.header__modal')
	const modal = document.querySelector('.modal')
	const loginModal = document.querySelector('.modal__login')
	const registerModal = document.querySelector('.modal__register')
	const loginBtn = document.querySelector('.modal__login-btn')
	const registerBtn = document.querySelector('.modal__register-btn')
	const closeSpans = document.querySelectorAll('.close')
	const switchToLogin = registerModal.querySelector('.modal__link')
	const switchToRegister = loginModal.querySelector('.modal__desc a')

	// Функция открытия модального окна для профиля
	function toggleModal() {
		headerModal.style.display =
			headerModal.style.display === 'block' ? 'none' : 'block'
		modal.style.display = 'flex'
	}

	// Функция открытия формы логина
	function openLoginForm() {
		loginModal.style.display = 'block'
		modal.style.display = 'none'
		registerModal.style.display = 'none'
	}

	// Функция открытия формы регистрации
	function openRegisterForm() {
		registerModal.style.display = 'block'
		modal.style.display = 'none'
		loginModal.style.display = 'none'
	}

	// Функция закрытия обоих модальных окон
	function closeModal() {
		registerModal.style.display = 'none'
		loginModal.style.display = 'none'
		headerModal.style.display = 'none'
	}

	// Обработчик клика по иконке профиля для открытия модального окна
	profileBtn.addEventListener('click', toggleModal)

	// Обработчик клика по кнопке входа
	loginBtn.addEventListener('click', openLoginForm)

	// Обработчик клика по кнопке регистрации
	registerBtn.addEventListener('click', openRegisterForm)

	// Обработчики для закрытия модальных окон
	closeSpans.forEach(span => {
		span.addEventListener('click', closeModal)
	})

	// Переключение между формами в модальном окне
	switchToRegister.addEventListener('click', function (event) {
		event.preventDefault()
		openRegisterForm()
	})

	switchToLogin.addEventListener('click', function (event) {
		event.preventDefault()
		openLoginForm()
	})

	// Закрытие модального окна нажатием вне его области
	window.addEventListener('click', function (event) {
		if (event.target === headerModal) {
			closeModal()
		}
	})

	// Закрытие модального окна нажатием на клавишу ESC
	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape') {
			closeModal()
		}
	})
}
