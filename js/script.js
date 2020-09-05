var currentElement = 1;

function hideEl(el) {
    $("#" + el).hide();
}

function showEl(el) {
    $("#" + el).show();
}

hideEl("layoutTwo");
hideEl("layoutThree");

showL1();

function showL1() {
    $("#layoutTwo").animate({
        bottom: -800
    }, 320);
    $("#layoutThree").animate({
        bottom: -800
    }, 320);
    $("#layoutOne").delay(320).show().animate({
        bottom: 10
    }, 320);
}

function showL2() {
    $("#layoutTwo").delay(320).show().animate({
        bottom: 10
    }, 320);
    $("#layoutThree").animate({
        bottom: -800

    }, 320);
    $("#layoutOne").animate({
        bottom: -400
    }, 320);
}

function showL3() {
    $("#layoutTwo").animate({
        bottom: -800
    }, 320);
    $("#layoutThree").delay(320).show().animate({
        bottom: 10

    }, 320);
    $("#layoutOne").animate({
        bottom: -400
    }, 320);
}

$(".showL1").on("click", function () {
    showL1();
});

$(".showL2").on("click", function () {
    showL2();
});

$(".showL3").on("click", function () {
    showL3();
});