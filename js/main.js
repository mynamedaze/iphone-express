'use strict';
var formatted = new Formatter(document.getElementById('telephone-field'), {
  'pattern': '+7 ({{999}}) {{999}}-{{9999}}',
  'persistent': true
});

$(document).ready(function(){
  $(".intro__utp-list").owlCarousel({
    responsive:{
        0:{
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            items:1
        },
        768:{
            items:3,
            touchDrag: false,
            mouseDrag: false
        },
        1362:{
            items:3,
            touchDrag: false,
            mouseDrag: false
        }
    }
  });
});
var authors = document.getElementsByClassName('feedback__author');
authors = Array.prototype.slice.call(authors);

var dots = document.getElementsByClassName('feedback__dot');
dots = Array.prototype.slice.call(dots);

var seeMore = document.getElementsByClassName('feedback__more');

var prevFeed = document.getElementsByClassName('feedback__prev');
var nextFeed = document.getElementsByClassName('feedback__next');

var authorsCount = authors.length;
var authorsCountLite = authorsCount;

var count = 0;
var translate = 360;

/*ищем разницу в количестве между полным списком отзывов и предпросмотром*/
function findLite() {
    for (var j = 0; j < authors.length; j++) {
        if ($(authors[j]).hasClass("feedback__author--disabled")) {
            authorsCountLite--;
        }
    }
}
findLite();

/*листаем отзывы при нажатии кнопок лево и право*/
$(prevFeed).click(function() {
    if (count < 0) {
        $(dots[-count]).removeClass('feedback__dot--active');
        ++count;
        $(dots[-count]).addClass('feedback__dot--active');
        $(authors).css({'transform' : 'translateX(' + (count * translate) + 'px)'});
    }
    console.log(count);
})
$(nextFeed).click(function() {
    if (count > -(authorsCountLite - 1)) {
        $(dots[-count]).removeClass('feedback__dot--active');
        --count;
        $(dots[-count]).addClass('feedback__dot--active');
        $(authors).css({'transform' : 'translateX(' + (count * translate) + 'px)'});
        console.log(count);
    }

})

/*догружаем блоки при нажатии на "больше отзывов"*/
$(seeMore).click(function() {
    $(authors).removeClass('feedback__author--disabled');
    $(dots).removeClass('feedback__dot--disabled');
    authorsCountLite = authorsCount;
})