(function () {
    var newOnsubmit = "yaCounter38229915.reachGoal('order-popup-1'); return true;";
    function createPopup(popupClassName, clonePopUpId, formId, onsubmitStr) {
        var divClose = document.createElement('div');
        divClose.className = 'close';
        var popUpHead = document.createElement('div');
        popUpHead.className = popupClassName;
        var divModalWindow = document.createElement('div');
        divModalWindow.className = 'modal';
        popUpHead.appendChild(divModalWindow);
        var clonePopUp = document.getElementById('clonePopUp').cloneNode(true);
        clonePopUp.id = clonePopUpId;
        clonePopUp.insertAdjacentElement('afterBegin', divClose);
        popUpHead.appendChild(clonePopUp);
        document.body.appendChild(popUpHead);
        console.log(popUpHead);
        var form = document.querySelector(formId);
        form.setAttribute('onsubmit', onsubmitStr);
    }

    function close(closeObj) {
        var modalClose = document.querySelectorAll(closeObj);
        for (var j = 0; j < modalClose.length; j++) {
            modalClose[j].addEventListener('click', function () {
                for (var i = 0; i < document.querySelectorAll('.pop-up').length; i++) {
                    document.querySelectorAll('.pop-up')[i].style.display = 'none';
                }
            }, false);
        };
    };
    createPopup('pop-up-order-1 pop-up pop-up-order-1-open', 'PopUpOrder1', 'div#PopUpOrder1 form', newOnsubmit);
    function openPopup(openBtn, openObj) {
        document.querySelector(openBtn).onclick = function () {
            document.querySelector(openObj).style.display = 'block';
        };
    };

    close('.modal');
    close('.close');
    openPopup('.get-call-1', '.pop-up-order-1');
    document.onkeyup = function (event) {
        if (event.which == '27') {
            for (var i = 0; i < document.querySelectorAll('.pop-up').length; i++) {
                document.querySelectorAll('.pop-up')[i].style.display = 'none';
            }
        }
    };
})();