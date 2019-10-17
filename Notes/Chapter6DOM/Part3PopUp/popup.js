const button = document.querySelector('button');
const popupWrapper = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button.addEventListener('click', () => {
    popupWrapper.style.display = 'block';
})

close.addEventListener('click', () => {
    popupWrapper.style.display = 'none';
})

popupWrapper.addEventListener('click', () => {
    popupWrapper.style.display = 'none';
})