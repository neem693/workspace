/**
 * 
 */

$(document).ready(function () {
    opacity_on();
});

function opacity_on() {
    var jsTuto = document.getElementsByClassName("jsTuto");
    // var test = document.getElementById("test");

    for (var i = 0; i < jsTuto.length; i++) {
        jsTuto[i].onmouseenter = function () {
            // test.innerHTML += "a";
            this.childNodes[1].className += " opacity_on";
        };

    }
    for (var i = 0; i < jsTuto.length; i++) {
        jsTuto[i].onmouseleave = function () {
            // test.innerHTML += "b";
            this.childNodes[1].className = "jsImg";
        };

    }

}