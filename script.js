
const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg'
];
const firstImage = 0;
const lastImage = images.length - 1;
let currentImage = 0;
let imageIndex = 0;

const prevBtn = document.getElementById('prev');
prevBtn.addEventListener('click', () => {
    const imageTag = document.getElementById('image');
    currentImage--;
    if (currentImage <= firstImage) {
        currentImage = 0;
    }
    imageTag.src = images[currentImage];
    document.getElementById('info').innerHTML = (currentImage + 1) + '/6';
});

const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', () => {
    const imageTag = document.getElementById('image');
    currentImage++;
    if (currentImage >= lastImage) {
        currentImage = 5;
    }
    imageTag.src = images[currentImage];
    document.getElementById('info').innerHTML = (currentImage + 1) + '/6';
});


