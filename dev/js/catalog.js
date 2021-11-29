let tvBtn = document.querySelector("#tvBtn");
let tvHid = document.querySelector("#tvHid");

tvBtn.addEventListener("click", Click);

function Click() {
    tvHid.classList.toggle("hidden");
}

let smartBtn = document.querySelector("#smartBtn");
let smartHid = document.querySelector("#smartHid");

smartBtn.addEventListener("click", btnClick);

function btnClick() {
    smartHid.classList.toggle("hidden");
}
let pcBtn = document.querySelector("#pcBtn");
let pcHid = document.querySelector("#pcHid");

pcBtn.addEventListener("click", pc);

function pc() {
    pcHid.classList.toggle("hidden");
}
let techBtn = document.querySelector("#techBtn");
let techHid = document.querySelector("#techHid");

techBtn.addEventListener("click", tech);

function tech() {
    techHid.classList.toggle("hidden");
}

function myFunction() {
    if ($(window).width() < 1200) {
        $(".c-catalog-list__icon").addClass("col-md-6")
    } else {
        $(".c-catalog-list__icon").removeClass("col-md-6")
    }
}

myFunction();

$(window).resize(function() {
    myFunction();
});

//вызываем
myFunction();

//ну и при ресайзе перепроверяем
$(window).resize(function() {
    myFunction();
});

function myfunction() {
    if ($(window).width() < 1050) {
        $(".c-catalog-list__icon").addClass("col-md-8")
    } else {
        $(".c-catalog-list__icon").removeClass("col-md-8")
    }
}

myfunction();

$(window).resize(function() {
    myfunction();
});

//вызываем
myfunction();

//ну и при ресайзе перепроверяем
$(window).resize(function() {
    myfunction();
});