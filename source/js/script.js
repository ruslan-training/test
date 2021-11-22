// SWIPER SLIDER
new Swiper('.slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Навигация 
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		// Буллеты
		type: 'bullets',
		// Кастомные буллеты
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' +  '0' + (index + 1) + '</span>';
		},
	},


    slidesPerView: 1,
	// Бесконечный слайдер

	// Скорость
	speed: 400,

	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,
	
	// Доступность
	a11y: {
		// Включить/выключить
		enabled: true,
		// Сообщения
		prevSlideMessage: 'Previous slide',
		nextSlideMessage: 'Next slide',
		firstSlideMessage: 'This is the first slide',
		lastSlideMessage: 'This is the last slide',
		paginationBulletMessage: 'Go to slide {{index}}',
		notificationClass: 'swiper-notification',
		containerMessage: '',
		containerRoleDescriptionMessage: '',
		itemRoleDescriptionMessage: '',
		// и т.д.
	},
	
});

// // Burger

// let burger = document.querySelector('.burger'),
//     adaptivemenu = document.querySelector('.adaptive-menu'),
//     lists = document.querySelectorAll('.list__item'),
//     body = document.body;

// burger.addEventListener('click', function(){
//     burger.classList.toggle('_active');
//     adaptivemenu.classList.toggle('_active');
//     body.classList.toggle('_lock');
//     for(list of lists) {
//         list.classList.toggle('_active');
//     }
// })

// // Scroll Animation

// const animItems = document.querySelectorAll(`._animated`)
// if (animItems.length > 0) {
//     window.addEventListener(`scroll`, animOnScroll)

//     function animOnScroll() {
//         for (let index = 0; index < animItems.length; index++) {
//             const animItem = animItems[index]
//             const animItemHeight = animItem.offsetHeight
//             const animItemOffSet = offset(animItem).top
//             const animStart = 4
//             let animItemPoint = window.innerHeight - animItemHeight / animStart
//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart
//             }
//             if ((window.scrollY > animItemOffSet - animItemPoint) && window.scrollY < (animItemOffSet + animItemHeight)) {
//                 animItem.classList.add(`_active`)
//             } else {
//                 if (!(animItem.classList.contains(`_once-animated`))) {
//                     animItem.classList.remove(`_active`)
//                 }
//             }
//         }
//     }

//     function offset(el) {
//         const rect = el.getBoundingClientRect()
//         let scrollLeft = window.scrollY || document.documentElement.scrollLeft
//         let scrollTop = window.scrollY || document.documentElement.scrollTop
//         return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
//     }

//     setTimeout(() => {
//         animOnScroll()
//     }, 300)
// }
