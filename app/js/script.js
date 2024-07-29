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

const imageSources = {
    tab_1: ['../images/building.png', '../images/hotel.png', '../images/house.png', '../images/height.png'],
    tab_2: ['../images/hotel.png', '../images/building.png', '../images/height.png', '../images/house.png'],
    tab_3: ['../images/house.png', '../images/height.png', '../images/building.png', '../images/hotel.png'],
    tab_4: ['../images/height.png', '../images/house.png', '../images/hotel.png', '../images/building.png']
};

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
        const newSources = imageSources[tabId];

        images.forEach((img, index) => {
            img.src = newSources[index];
        });
       
    });
});

images.forEach((img, index) => {
    img.src = imageSources['tab_1'][index];
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

