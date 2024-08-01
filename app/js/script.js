//Swiper
const swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    grabCursor: true,
    
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
    }
});

//Tabs
const tabButtons = document.querySelectorAll('.tabs__link');
const images = document.querySelectorAll('.tabs__img');

const colors = {
    tab_1: 'blue',
    tab_2: 'red',
    tab_3: 'green',
    tab_4: 'violet'
};

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.classList.remove('blue', 'red', 'green', 'violet'); 
        });

        button.classList.add('active');
        button.classList.add(colors[button.getAttribute('data-tab')]);

        const tabId = button.getAttribute('data-tab');

        images.forEach(img => {
            img.src = img.getAttribute(`data-${tabId}-src`);
        });
    });
});

images.forEach(img => {
    img.src = img.getAttribute('data-tab_1-src');
});

//Swiper2
const swiper2 = new Swiper(".mySlider", {
    navigation: {
        prevEl: ".projectNext",
        nextEl: ".projectPrev"
    },
    
    pagination: {
        el: ".swiper-pagination"
    },
    mousewheel: !0,
    keyboard: !0

});

