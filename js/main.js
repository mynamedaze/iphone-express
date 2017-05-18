var firstnameField = document.getElementById('firstname-field');
var telephoneField = document.getElementById('telephone-field');

var firstNameFieldCallback = document.getElementById('firstname-field-callback');
var telephoneFieldCallback = document.getElementById('telephone-field-callback');

/*оживляем карусель в интро*/
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
/*Плавный скролл*/
$(function(){
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});
/* */
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

var breakMainListPhone = document.getElementsByClassName('device-model__break-mainlist--phone');
var breakMainListPad = document.getElementsByClassName('device-model__break-mainlist--pad');

$(introTogglePhone).click(function() {
    $(introTogglePhone).addClass('device-model__button--active');
    $(introTogglePad).removeClass('device-model__button--active');

    $(modelListPhone).removeClass('disable');
    $(modelListPad).addClass('disable');

    $(breakMainListPhone).removeClass('disable');
    $(breakMainListPad).addClass('disable');
});
$(introTogglePad).click(function() {
    $(introTogglePhone).removeClass('device-model__button--active');
    $(introTogglePad).addClass('device-model__button--active');

    $(modelListPhone).addClass('disable');
    $(modelListPad).removeClass('disable');

    $(breakMainListPhone).addClass('disable');
    $(breakMainListPad).removeClass('disable');
});

/*переключение между мабасиками*/
var currentItemPhone = 0;
var modelItemsPhone = document.getElementsByClassName('device-model__model-item--phone');
modelItemsPhone = Array.prototype.slice.call(modelItemsPhone);

var currentBkeakListPhone = 0;
var breakListPhone = document.getElementsByClassName('device-model__break-list--phone');
breakListPhone = Array.prototype.slice.call(breakListPhone);

modelItemsPhone.forEach(function (element, i) {
    element.addEventListener('click', function () {
        $(breakListPhone[currentBkeakListPhone]).addClass('disable');
        $(breakListPhone[i]).removeClass('disable');
        currentBkeakListPhone = i;

        $(modelItemsPhone[currentItemPhone]).removeClass('device-model__model-item--active');
        $(modelItemsPhone[i]).addClass('device-model__model-item--active');
        currentItemPhone = i;
    })
});

/*переключение между таблетки*/
var currentItemPad = 0;
var modelItemsPad = document.getElementsByClassName('device-model__model-item--pad');
modelItemsPad = Array.prototype.slice.call(modelItemsPad);

var currentBkeakListPad = 0;
var breakListPad = document.getElementsByClassName('device-model__break-list--pad');
breakListPad = Array.prototype.slice.call(breakListPad);

modelItemsPad.forEach(function (element, i) {
    element.addEventListener('click', function () {
        $(breakListPad[currentBkeakListPad]).addClass('disable');
        $(breakListPad[i]).removeClass('disable');
        currentBkeakListPad = i;

        $(modelItemsPad[currentItemPad]).removeClass('device-model__model-item--active');
        $(modelItemsPad[i]).addClass('device-model__model-item--active');
        currentItemPad = i;
    })
});

/*настраиваем кнопку для попап формы заявки на мобильной версии*/
var introCallButton = document.getElementsByClassName('intro__call-button');

var introFormField = document.getElementsByClassName('intro__form-field');

$(introCallButton).click(function() {
    $(introFormField).removeClass('intro__form-field--mobile');
    $(introCallButton).addClass('disable');
});

/*форма отправки без перезагрузки*/
var frm1 = $('#form-1');

frm1.submit(function (ev) {
    $.ajax({
        type: frm1.attr('method'),
        url: frm1.attr('action'),
        data: frm1.serialize(),
        success: function (data) {
            alert('Заявка отправлена!');
            $(firstnameField).val('');
            $(telephoneField).val('');
            $(firstnameFieldCallback).val('');
            $(telephoneFieldCallback).val('');
        }
    });
    ev.preventDefault();
});

var frm2 = $('#form-2');

frm2.submit(function (ev) {
    $.ajax({
        type: frm2.attr('method'),
        url: frm2.attr('action'),
        data: frm2.serialize(),
        success: function (data) {
            alert('Заявка отправлена!');
        }
    });
    ev.preventDefault();
});

/*запрет на ввод букв в поле телефона*/

$(telephoneField).keypress(function(e) {
    return !(/[А-Яа-яA-Za-z ]/.test(String.fromCharCode(e.charCode)));
});

$(telephoneFieldCallback).keypress(function(e) {
    return !(/[А-Яа-яA-Za-z ]/.test(String.fromCharCode(e.charCode)));
});