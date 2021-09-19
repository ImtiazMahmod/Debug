const images = [
    '/images/img_1.jpg',
    '/images/img_2.jpg',
    '/images/img_3.jpg',
    '/images/img_4.jpg',
    '/images/img_5.jpg',
    '/images/img_6.jpg',
    '/images/img_7.jpg',
    '/images/img_8.jpg',
    '/images/img_9.jpg'
]
let index = 0;
const sliderImg = document.getElementById('sliderImg');
setInterval(()=>{
    if(index>images.length-1){
        index=0;
    }
    const imageUrl = images[index];
    sliderImg.setAttribute('src',imageUrl);
    console.log(imageUrl);
    index++;
}, 1000);