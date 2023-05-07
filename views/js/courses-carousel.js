(function () {
    let coursesSlides = [
    ];

    function populateCoursesSlides(data) {
        coursesSlides = [];
        for (const course of data) {
            let html = `<div class="slider-item__coureses active">
                <img class="img__courses" src="img/${course.image_name}">
                <h3 class="item-courses__tittle">${course.title}</h3>
                <div class="blok-mark__courses">
                    <div class="check-mark__courses">
                        <img width="20" src="img/date-courses.svg" class="date-courses" alt="icon">
                        <span class="courses-mark__text">${course.duration} days</span>
                    </div>
                    <div class="check-mark__courses">
                        <img width="20" src="img/money-courses.svg" class="money-courses" alt="icon">
                        <span class="courses-mark__text">$${course.price}</span>
                    </div>
                    <div class="check-mark__courses">
                        <img width="20" src="img/person-courses.svg" class="person-courses" alt="icon">
                        <span class="courses-mark__text">${course.participants}</span>
                    </div>
                </div>
                <div class="text-mark__courses">
                    <p>${course.description}</p>
                </div>
                <div class="carousel-coureses__button">
                    <a href="#contacts" class="courses__btn-select button" onclick="selectCourseInApplicationForm('${course._id}')">Sign Up</a>
                </div>
            </div>`;
            coursesSlides.push(html);
        }
        renderSlides();
    }

    let currentSlideIdx = 0;

    function renderSlides() {
        if (coursesSlides.length == 0) {
            return;
        }
        const slideContainer = document.querySelector('.courses__slide-container');
        slideContainer.innerHTML = coursesSlides[currentSlideIdx];
        if (window.innerWidth >= 850) {
            const secondSlideIdx = currentSlideIdx + 1 >= coursesSlides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += coursesSlides[secondSlideIdx];
            if (window.innerWidth >= 1250) {
                const thirdSlideIdx = secondSlideIdx + 1 >= coursesSlides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += coursesSlides[thirdSlideIdx];
            }
        }
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= coursesSlides.length ? 0 : currentSlideIdx + 1;
        renderSlides();
    }

    // setInterval(nextSlide, 3000);

    renderSlides();

    const btnNext = document.querySelector('.slick-next');
    btnNext.addEventListener('click', nextSlide);

    const btnPrev = document.querySelector('.slick-prev');
    btnPrev.addEventListener('click', () => {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? coursesSlides.length - 1 : currentSlideIdx - 1;
        renderSlides();
    });

    window.addEventListener('resize', renderSlides);
    window.addEventListener('courses', (event) => {
        populateCoursesSlides(event.detail);
    });
})();
