sec1Btn = document.querySelector('#sec1-btn');
sec2Btn = document.querySelector('#sec2-btn');
readBtn1 = document.querySelector('#red-mr1btn');
readBtn2 = document.querySelector('#red-mr2btn');
readBtn3 = document.querySelector('#red-mr3btn');
readBtn4 = document.querySelector('#red-mr4btn');
readBtn5 = document.querySelector('#red-mr5btn');
readBtn6 = document.querySelector('#red-mr6btn');
readBtn7 = document.querySelector('#red-mr7btn');
readBtn8 = document.querySelector('#red-mr8btn');
readBtn9 = document.querySelector('#red-mr9btn');
readBtn10 = document.querySelector('#red-mr10btn');
readBtn11 = document.querySelector('#red-mr11btn');
readBtn12 = document.querySelector('#red-mr12btn');
readpera1 = document.querySelector('#rd-mr1');
readpera2 = document.querySelector('#rd-mr2');
readpera3 = document.querySelector('#rd-mr3');
readpera4 = document.querySelector('#rd-mr4');
readpera5 = document.querySelector('#rd-mr5');
readpera6 = document.querySelector('#rd-mr6');
readpera7 = document.querySelector('#rd-mr7');
readpera8 = document.querySelector('#rd-mr8');
readpera9 = document.querySelector('#rd-mr9');
readpera10 = document.querySelector('#rd-mr10');
readpera11 = document.querySelector('#rd-mr11');
readpera12 = document.querySelector('#rd-mr12');
servicePera = document.querySelector('.service1-pera');
serviceSec2Box3 = document.querySelector('.service-sec2-box3');
serve = document.querySelector('.more');
insideServe = document.querySelector('.inside-more');
boxesBtn = document.querySelector('.boxes-btn');
crossbtn = document.querySelector('.cross');

sec1Btn.addEventListener('click', () => {
    servicePera.classList.toggle('pera-hidden');
    if (!servicePera.classList.contains('pera-hidden')) {
        sec1Btn.innerHTML = "Hide";
    } else {
        sec1Btn.innerHTML = "Show More";
    }
});

sec2Btn.addEventListener('click', () => {
    serviceSec2Box3.classList.toggle('forCheck');
    if (serviceSec2Box3.style.display !== 'none') {
        serviceSec2Box3.style.display = 'none';
        sec2Btn.innerHTML = "Show More";
    }
    else {
        serviceSec2Box3.style.display = 'flex';
        sec2Btn.innerHTML = "Show Less";
    }
});

readBtn1.addEventListener('click', () => {
    serve.classList.add('more-display');
    insideServe.classList.add('inside-more-scale');
    insideServe.innerHTML = readpera1.innerHTML;
});

readBtn2.addEventListener('click', () => {
    serve.classList.add('more-display');
    insideServe.classList.add('inside-more-scale');
    insideServe.innerHTML = readpera2.innerHTML;
});

readBtn3.addEventListener('click', () => {
    serve.classList.add('more-display');
    insideServe.classList.add('inside-more-scale');
    insideServe.innerHTML = readpera3.innerHTML;
});

readBtn4.addEventListener('click', () => {
    serve.classList.add('more-display');
    insideServe.classList.add('inside-more-scale');
    insideServe.innerHTML = readpera4.innerHTML;
});

readBtn5.addEventListener('click', () => {
    serve.classList.add('more-display');
    insideServe.classList.add('inside-more-scale');
    insideServe.innerHTML = readpera5.innerHTML;
});

readBtn6.addEventListener('click', () => {
    serve.classList.add('more-display');
    insideServe.classList.add('inside-more-scale');
    insideServe.innerHTML = readpera6.innerHTML;
});

readBtn7.addEventListener('click', () => {
    serve.classList.add('more-display');
    insideServe.classList.add('inside-more-scale');
    insideServe.innerHTML = readpera7.innerHTML;
});

readBtn8.addEventListener('click', () => {
    serve.classList.add('more-display');
    insideServe.classList.add('inside-more-scale');
    insideServe.innerHTML = readpera8.innerHTML;
});

readBtn9.addEventListener('click', () => {
    serve.classList.add('more-display');
    insideServe.classList.add('inside-more-scale');
    insideServe.innerHTML = readpera9.innerHTML;
});
readBtn10.addEventListener('click', () => {
    serve.classList.add('more-display');
    insideServe.classList.add('inside-more-scale');
    insideServe.innerHTML = readpera10.innerHTML;
});
readBtn11.addEventListener('click', () => {
    serve.classList.add('more-display');
    insideServe.classList.add('inside-more-scale');
    insideServe.innerHTML = readpera11.innerHTML;
});
readBtn12.addEventListener('click', () => {
    serve.classList.add('more-display');
    insideServe.classList.add('inside-more-scale');
    insideServe.innerHTML = readpera12.innerHTML;
});

crossbtn.addEventListener('click', () => {
    serve.classList.remove('more-display');
    insideServe.classList.remove('inside-more-scale');
});
