export function sliderShow() {
	// Исходные данные по слайдеру (const)
	const slideImages = document.querySelector('.slide__images')
	const slideImg = document.querySelectorAll('.slide__img')
	const prevBtn = document.getElementById('prev')
	const nextBtn = document.getElementById('next')
	const pagination = document.querySelectorAll('.pagination')

	// Переменные
	let sliderCount = 0
	let slideImgX = 0
	const imgWidth = 475
	let lengthItems = slideImg.length - 1

	// Кнопка назад
	prevBtn.addEventListener('click', () => {
		sliderCount = sliderCount - 1 >= 0 ? sliderCount - 1 : lengthItems
		prevNextSlide()
	})

	// Кнопка вперед
	nextBtn.addEventListener('click', () => {
		sliderCount = sliderCount + 1 <= lengthItems ? sliderCount + 1 : 0
		prevNextSlide()
	})

	pagination.forEach(el =>
		el.addEventListener('click', event => slideSelect(event))
	)

	// Функции
	function prevNextSlide() {
		selectPageDot()
		slideMove()
	}

	function slideSelect(event) {
		sliderCount = parseInt(event.target.dataset.pagination)
		prevNextSlide()
	}

	function slideMove() {
		slideImgX = -imgWidth * sliderCount
		slideImages.style.transform = `translateX(${slideImgX}px)`
	}

	function selectPageDot() {
		const sliderDots = document.querySelectorAll('.pagination')

		for (let i = 0; i < sliderDots.length; i++) {
			if (i === sliderCount) {
				sliderDots[i].classList.add('active')
			} else {
				sliderDots[i].classList.remove('active')
			}
		}
	}

	window.addEventListener('resize', event => {
		sliderCount = 0
		slideMove()
		selectPageDot()
	})
}
