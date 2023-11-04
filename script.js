const thumbnails = document.querySelectorAll('.thumbnail img');
const popup = document.querySelector('.popup');
const popupBtn = document.querySelector('.popup__close')
const popupImg = document.querySelector('.popup__img')
const arrowLeft = document.querySelector('.popup__arrow--left')
const arrowRight = document.querySelector('.popup__arrow--right')

let currentImgIndex;

thumbnails.forEach(function (thmubnail, index) {
    thmubnail.addEventListener('click', function (e) {
        popup.classList.remove('hidden');
        popupImg.src = e.target.src;
        currentImgIndex = index;

    })
})

popupBtn.addEventListener('click', function () {
    popup.classList.add('hidden')
})

arrowRight.addEventListener('click', function () {
    if (currentImgIndex === thumbnails.length - 1) {
        currentImgIndex = 0;
    } else {
        currentImgIndex++;
    }
    popupImg.src = thumbnails[currentImgIndex].src
})

arrowLeft.addEventListener('click', function () {
    if (currentImgIndex === 0) {
        currentImgIndex = thumbnails.length - 1;
    } else {
        currentImgIndex--;
    }
    popupImg.src = thumbnails[currentImgIndex].src
})


document.addEventListener('keydown', function(e){

})