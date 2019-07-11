const imgSrc = ['./shots/1-min.png ', './shots/2-min.png', './shots/3-min.png', './shots/4-min.png', './shots/5-min.png',
    './shots/6-min.png', './shots/7-min.png', './shots/8-min.png', './shots/9-min.png', './shots/10-min.png', './shots/11-min.png', './shots/12-min.png'
]
const name = ['Shopping Cart', 'Calculators', 'Weather App', 'Javascript Quiz', 'Ajax Type Ahead',
    'Todo List', 'Quote Machine', 'Tomato Timer', 'HTML5 Canvas', 'Image Gallery', 'Indecision App', 'CSS Clock'
]
const link = ['https://devnoorfatima.github.io/Projects/shopping-cart/', 'https://devnoorfatima.github.io/Projects/calculators/', 'https://devnoorfatima.github.io/Projects/weather-app/', 'https://devnoorfatima.github.io/Projects/Javascript-Quiz/', 'https://devnoorfatima.github.io/Projects/Ajax-type-ahead/',
    'https://devnoorfatima.github.io/Projects/todo-list/', 'https://devnoorfatima.github.io/Projects/quote-machine/', 'https://devnoorfatima.github.io/Projects/tomato-timer/', 'https://devnoorfatima.github.io/Projects/HTML-5-Canvas/', 'https://devnoorfatima.github.io/Projects/Javascript-image-gallery/', 'https://github.com/devnoorfatima/React/tree/master/indecision-app', 'https://devnoorfatima.github.io/Projects/CSS-Clock/'
]
const code = ['https://github.com/devnoorfatima/Shopping-Cart', 'https://github.com/devnoorfatima/Calculators', 'https://github.com/devnoorfatima/Weather-App', 'https://github.com/devnoorfatima/devnoorfatima.github.io/tree/master/Projects/Javascript-Quiz', 'https://github.com/devnoorfatima/devnoorfatima.github.io/tree/master/Projects/Ajax-type-ahead', 'https://github.com/devnoorfatima/devnoorfatima.github.io/tree/master/Projects/todo-list',
    'https://github.com/devnoorfatima/devnoorfatima.github.io/tree/master/Projects/quote-machine', 'https://github.com/devnoorfatima/devnoorfatima.github.io/tree/master/Projects/tomato-timer', 'https://github.com/devnoorfatima/devnoorfatima.github.io/tree/master/Projects/HTML-5-Canvas', 'https://github.com/devnoorfatima/devnoorfatima.github.io/tree/master/Projects/Javascript-image-gallery', 'https://github.com/devnoorfatima/React/tree/master/indecision-app', 'https://github.com/devnoorfatima/devnoorfatima.github.io/tree/master/Projects/CSS-Clock'
]

// window.onscroll = function (e) {
//     console.log(window.scrollY); // Value of scroll Y in px
// };
function addToPortfolio() {
    const portfolio = document.querySelector('#portfolio');
    const html = [];
    for (let i = 0; i < name.length; i++) {
        html.push(`
       
     <div class="col-sm-3 mx-5 my-3 p-3 portfolio-item">
     <img class="img-responsive shot" src="${imgSrc[i]}">
     <h4 class='my-3'>${name[i]}</h4>
     <div class="row mr-0 text-center ">
         <div class="col-sm-6">
             <a class='btn' href='${link[i]}' target='_blank'>Live Link</a>
         </div>
         <div class="col-sm-6">
             <a class='btn' href='${code[i]}' target='_blank'>Code</a>
         </div>
     </div>
 </div>
        `)
    }
    portfolio.innerHTML = html.join('');
}

$(window).scroll(function() {    
    let scroll = $(window).scrollTop();
    if (scroll >= 1150) {
        $(".portfolio-item").addClass("animated fadeInUp");
    }else {
        $(".portfolio-item").removeClass("animated fadeInUp");
    }
    if (scroll >= 1350) {
        $(".text-info").addClass("animated zoomIn");
    }else {
        $(".text-info").removeClass("animated zoomIn");
    }
    if (scroll >= 715) {
        $(".anim").addClass("animated fadeInUp");
    }else {
        $(".anim").removeClass("animated fadeInUp");
    }
    if (scroll >= 715) {
        $(".symbol").addClass("animated fadeInUp");
        $(".animation").addClass("animated zoomIn");
    }else {
        $(".symbol").removeClass("animated fadeInUp");
        $(".animation").removeClass("animated zoomIn");
    }
    if (scroll >= 715) {
        $("#font").addClass("animated fadeInUp");
    }else {
        $("#font").removeClass("animated fadeInUp");
    }
});

window.addEventListener('DOMContentLoaded', addToPortfolio);