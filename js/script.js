$(document).ready(function(){
    $('.bxslider').bxSlider({
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: '→',
        prevText: '←',
        adaptiveHeight: true
    });

    $(".scroll").on("click", function (event) {
        event.preventDefault();
        var id  = this.getAttribute('href'),
         top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

var bluePhoneValue = true;
var checkCodeValue = true;
var bayValue = false;
var createPopUpValue = true;
var mouseOutValue = true;
var ieValue = false;
var firefoxValue = false;
var safariValue = false;

var headOnsubmit = "yaCounter38229915.reachGoal('callback'); return true;";
var PhoneOnsubmit = "yaCounter38229915.reachGoal('popup_phone'); return true;";
var MouseOnsubmit = "yaCounter38229915.reachGoal('popup_mouseleave'); return true;";
