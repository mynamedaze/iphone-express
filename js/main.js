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
})
$(nextFeed).click(function() {
    if (count > -(authorsCountLite - 1)) {
        $(dots[-count]).removeClass('feedback__dot--active');
        --count;
        $(dots[-count]).addClass('feedback__dot--active');
        $(authors).css({'transform' : 'translateX(' + (count * translate) + 'px)'});
    }

})

/*догружаем блоки при нажатии на "больше отзывов"*/
$(seeMore).click(function() {
    $(authors).removeClass('feedback__author--disabled');
    $(authors).removeClass('feedback__author--tablet-plus');
    $(dots).removeClass('feedback__dot--disabled');
    $(seeMore).addClass('feedback__more--active');
    authorsCountLite = authorsCount;
});

/*переключение тогглов интро*/
var introTogglePhone = document.getElementsByClassName('device-model__button--iphone');
var introTogglePad = document.getElementsByClassName('device-model__button--ipad');

var modelListPhone = document.getElementsByClassName('device-model__model-list--phone');
var modelListPad = document.getElementsByClassName('device-model__model-list--pad');

$(introTogglePhone).click(function() {
    $(introTogglePhone).addClass('device-model__button--active');
    $(introTogglePad).removeClass('device-model__button--active');

    $(modelListPhone).removeClass('disable');
    $(modelListPad).addClass('disable');
});
$(introTogglePad).click(function() {
    $(introTogglePhone).removeClass('device-model__button--active');
    $(introTogglePad).addClass('device-model__button--active');

    $(modelListPhone).addClass('disable');
    $(modelListPad).removeClass('disable');
});