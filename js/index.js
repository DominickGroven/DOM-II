// Your code goes here


//Event listeners start.

window.addEventListener('load', event =>{
    console.log(`${event.type} happened`)
})

//1

function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('img');
el.onwheel = zoom;

//2

const text = document.querySelector('body');
text.addEventListener('pointerover', (event) => {
    console.log('Pointer moved in');
});

//3
const mouse = document.getElementsByClassName('text-content')[0];

mouse.addEventListener('mouseover', event => {
    event.target.style.color = 'red'

    setTimeout(function(){
        event.target.style.color = "";
    }, 500)
})

//4

const card = document.getElementsByClassName('logo-heading')[0];

card.addEventListener('dblclick', function () {
    card.classList.toggle('large');
});

//5

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
    console.log('Page Scrolling')
}

window.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            doSomething(last_known_scroll_position);
            ticking = false;
        });

        ticking = true;
    }
});

//6