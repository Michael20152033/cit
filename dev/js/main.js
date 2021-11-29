/* frameworks */
//=include ./../../node_modules/jquery/dist/jquery.min.js
//=include ./../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map
//=include ./../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js
//=include ./../../node_modules/swiper/swiper-bundle.min.js

/* libs */
//=include lib/modernizr-custom.js

/* plugins */

/* separate */
//=include helpers/object-fit.js
//=include separate/global.js

/* components */
//=include components/js-header.js
//=include components/sliders.js
//=include components/catalog.js
//=include components/products.js

// the main code


$('input').focus(function () {
  $(this).parents('.form-group').addClass('focused');

});

$('input').blur(function () {
  var inputValue = $(this).val();
  if (inputValue == "") {
    $(this).removeClass('filled');
    $(this).parents('.form-group').removeClass('focused');
  } else {
    $(this).addClass('filled');
  }
})


if ($('.check-icon').length) {
  let toggle = document.querySelector('.check-icon');
  toggle.addEventListener('click', function (t) {
    toggle.classList.toggle('black');
  });
}

if ($('.c-decor-order ').length) {


  let tab1 = document.querySelector('#tab1');
  let tab2 = document.querySelector('#tab2');
  let point = document.querySelector('#point');
  let delivery = document.querySelector('#delivery');
  tab1.addEventListener('click', function (t) {
    point.classList.add('run');
    delivery.classList.remove('run');
    tab1.classList.add('actived');
    tab2.classList.remove('actived');
  });
  tab2.addEventListener('click', function (t) {
    tab1.classList.remove('actived');
    tab2.classList.add('actived');
    point.classList.remove('run');
    delivery.classList.add('run');
  });

  let varify = document.querySelector('#verify');
  let way = document.querySelector('#way');
  let cash = document.querySelector('#cash');
  let card = document.querySelector('#card');
  let system = document.querySelector('#system');
  let money = document.querySelector('#money');
  let installment = document.querySelector('#installment');

  cash.addEventListener('click', function (t) {
    way.classList.remove('run');
    varify.classList.remove('run');
    cash.classList.add('actived');
    card.classList.remove('actived');
    system.classList.remove('actived');
    money.classList.remove('actived');
    installment.classList.remove('actived');
  });
  card.addEventListener('click', function (t) {

    way.classList.add('run');
    varify.classList.add('run');
    cash.classList.remove('actived');
    card.classList.add('actived');
    system.classList.remove('actived');
    money.classList.remove('actived');
    installment.classList.remove('actived');
  });
  system.addEventListener('click', function (t) {

    way.classList.add('run');
    varify.classList.add('run');
    cash.classList.remove('actived');
    card.classList.remove('actived');
    system.classList.add('actived');
    money.classList.remove('actived');
    installment.classList.remove('actived');
  });
  money.addEventListener('click', function (t) {

    way.classList.add('run');
    varify.classList.add('run');
    cash.classList.remove('actived');
    card.classList.remove('actived');
    system.classList.remove('actived');
    money.classList.add('actived');
    installment.classList.remove('actived');
  });
  installment.addEventListener('click', function (t) {

    way.classList.add('run');
    varify.classList.add('run');
    cash.classList.remove('actived');
    card.classList.remove('actived');
    system.classList.remove('actived');
    money.classList.remove('actived');
    installment.classList.add('actived');
  });


  let choice = document.querySelector('#choice');
  let email = document.querySelector('#email');
  let hase = document.querySelector('#hase');
  let tel = document.querySelector('#tel');

  email.addEventListener('click', function (t) {
    email.classList.add('actived');
    choice.classList.add('run');
    tel.classList.remove('run');
    hase.classList.remove('actived');
  });
  hase.addEventListener('click', function (t) {
    email.classList.remove('actived');
    choice.classList.remove('run');
    tel.classList.add('run');
    hase.classList.add('actived');
  });
}
if ($('.c-office-inside').length) {


  let adressMob = document.querySelector('#adressMob');
  let adress = document.querySelector('#adress');
  let form = document.querySelector('#form');
  let agremment = document.querySelector('#agremment');
  let span = document.querySelector('#span');

  span.addEventListener('click', function (t) {
    agremment.classList.toggle('run');
  })
  adress.addEventListener('click', function (t) {
    form.classList.toggle('run');
  })
  adressMob.addEventListener('click', function (t) {
    form.classList.toggle('run');
  })

}