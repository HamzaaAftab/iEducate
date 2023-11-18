burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
search = document.querySelector('.search');
img = document.getElementById('img');
videoBtn = document.querySelector('#vid-btn');
subscribe = document.querySelector('#subsc-btn');
crossbtn = document.querySelector('.cross');
videoBg = document.querySelector('.vid-back');
video = document.querySelector('.vid-cls');


burger.addEventListener('click', () => {
    navbar.classList.toggle('h-class-resp');
    navList.classList.toggle('v-class-resp');
    search.classList.toggle('v-class-resp');
    img.classList.toggle('align-self');
});

videoBtn.addEventListener('click', () => {
    videoBg.classList.add('play-vid-bg');
    video.classList.add('play-vid');
    crossbtn.style.display = 'flex';
});

crossbtn.addEventListener('click', () => {
    videoBg.classList.remove('play-vid-bg');
    video.classList.remove('play-vid');
    crossbtn.style.display = 'none';
    video.pause();
});

subscribe.addEventListener('click', () => {
    if (subscribe.innerHTML === 'Subscribe') {
        subscribe.innerHTML = 'Subscribed'
        subscribe.style.backgroundColor = '#d30000';
    } else {
        subscribe.innerHTML = 'Subscribe'
        subscribe.style.backgroundColor = 'transparent';
    }
});

subscribe.addEventListener('mouseover', () => {
    if (subscribe.innerHTML === 'Subscribe') {
        subscribe.style.backgroundColor = '#050557b0';
    } else {
        subscribe.style.backgroundColor = 'red';
    }
});

subscribe.addEventListener('mouseout', () => {
    if (subscribe.innerHTML === 'Subscribe') {
        subscribe.style.backgroundColor = 'transparent';
    } else {
        subscribe.style.backgroundColor = '#d30000';
    }
});
