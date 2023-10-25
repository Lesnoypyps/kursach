const slides = document.querySelectorAll('.slide');
console.log(slides[0])
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slideCount = slides.length;
let slideIndex = 0;

let datasetSlides = [
    'image/fiji-island.jpg',
    'image/fiji-island.jpg',
    'image/fiji-island.jpg',
    'image/fiji-island.jpg',
    'image/fiji-island.jpg',
];
let dataSetSlidesText = [
    {
        city:'Stambol',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Dolore excepturi iusto nulla. ' +
            'Distinctio doloremque exercitationem explicabo harum impedit in iste magnam, modi neque nesciunt nihil repudiandae sint sit unde ut?',
    },
    {
        city:'Saint Petersburg',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Dolore excepturi iusto nulla. ' +
            'Distinctio doloremque exercitationem explicabo harum impedit in iste magnam, modi neque nesciunt nihil repudiandae sint sit unde ut?',
    },
    {
        city:'Moscow',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Dolore excepturi iusto nulla. ' +
            'Distinctio doloremque exercitationem explicabo harum impedit in iste magnam, modi neque nesciunt nihil repudiandae sint sit unde ut?',
    },
    {
        city:'New York',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Dolore excepturi iusto nulla. ' +
            'Distinctio doloremque exercitationem explicabo harum impedit in iste magnam, modi neque nesciunt nihil repudiandae sint sit unde ut?',
    },
    {
        city:'Paris',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Dolore excepturi iusto nulla. ' +
            'Distinctio doloremque exercitationem explicabo harum impedit in iste magnam, modi neque nesciunt nihil repudiandae sint sit unde ut?',
    }

]

for (let i = 0; i < slides.length; i++) {
    slides[i].dataset.id = i;
    slides[i].style.backgroundImage = `url(${datasetSlides[i]})`;
    const capital = slides[i].querySelector('.capital-name');
    const country = slides[i].querySelector('.country-name');
    capital.textContent = dataSetSlidesText[i].city;
    country.textContent = dataSetSlidesText[i].description;
}

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}
prevButton.addEventListener('click',showPreviousSlide)
nextButton.addEventListener('click', showNextSlide);
updateSlider();
console.log(slides[0].dataset)
