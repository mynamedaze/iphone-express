var formatted = new Formatter(document.getElementById('telephone-field'), {
  'pattern': '+7 ({{999}}) {{999}}-{{9999}}',
  'persistent': true
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    responsive:{
        0:{
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