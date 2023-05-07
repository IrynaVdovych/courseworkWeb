(function () {

    let pricingSlides = [
    ];

    function populateCoursesSlides(data) {
        pricingSlides = [];
        for (const course of data) {
            
            let attributesHTML = ""
            for (const att of course.attributes) {
                attributesHTML +=  ` 
                <div class="check-mark">
                    <img width="20" src="img/done.svg" class="" alt="icon">
                    <span class="check-mark__text">${att}</span>
                </div>
                `
            }

            html = `<div class="slider-item active">
                         <h3 class="item-pricing__tittle">${course.title}</h3>
                         <div class="carousel-item__price">
                            <p class="item-pricing__price">$${course.price} | ${course.duration} days</p>
                         </div>
                         ${attributesHTML}
                         <div class="carousel-inner__button">
                         <a href="#contacts" class="courses__btn-select button" onclick="selectCourseInApplicationForm('${course._id}')">Select Cource</a>
                     </div>
                 </div>`
            pricingSlides.push(html);
        }
        renderSlides();
    }

    let currentSlideIdx = 0;

    function renderSlides() {
        if (pricingSlides.length == 0) {
            return;
        }

        const slideContainer = document.querySelector('.pricing__slide-container');
        slideContainer.innerHTML =  pricingSlides[currentSlideIdx];
        if (window.innerWidth >= 768) {
            const secondSlideIdx = currentSlideIdx + 1 >= pricingSlides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += pricingSlides[secondSlideIdx];
            if (window.innerWidth >= 990) {
                const thirdSlideIdx = secondSlideIdx + 1 >= pricingSlides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += pricingSlides[thirdSlideIdx];
            }
        }
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= pricingSlides.length ? 0 : currentSlideIdx + 1;
        renderSlides();
    }

    // setInterval(nextSlide, 3000);

    renderSlides();

    const btnNext = document.querySelector('.slick-nextt');
    btnNext.addEventListener('click', nextSlide);

    const btnPrev = document.querySelector('.slick-prevv');
    btnPrev.addEventListener('click', () => {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? pricingSlides.length - 1 : currentSlideIdx - 1;
        renderSlides();
    });

    window.addEventListener('resize', renderSlides);

    window.addEventListener('courses', (event) => {
        populateCoursesSlides(event.detail);
    });

})();