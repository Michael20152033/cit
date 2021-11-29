(function () {
    let callapse = document.querySelector('.c-header__loop');
    let foo = document.querySelector('.c-header__show');
    let logo = document.querySelector('.c-header__logo');
    callapse.addEventListener('click', function (t) {
        foo.classList.toggle('c-header__show-active');
        logo.classList.add('hidden');
        callapse.classList.add('hidden');
    });
    let cancel = document.querySelector('.c-header__cancel');
    cancel.addEventListener('click', function (t) {
        foo.classList.remove('c-header__show-active');
        logo.classList.remove('hidden');
        callapse.classList.remove('hidden');
    });

    $(document).ready(function () {
        $('.c-header__burger').click(function (event) {
            event.preventDefault();
            $('#overlay').fadeIn(297, function () {
                $('#headerCatalog')
                    .css('display', 'block')
                    .animate({ opacity: 1 }, 198);
                $('body')
                    .css('overflow', 'hidden');
            });
        });

        $('#overlay, #headerCatalog__close, #click').click(function () {
            $('#headerCatalog').animate({ opacity: 0 }, 198, function () {
                $(this).css('display', 'none');
                $('#overlay').fadeOut(297);
                $('body')
                    .css('overflow', 'auto');
            });
        });
    });
    jQuery(document).ready(function ($) {
        var
            $window = $(window),
            $target = $(".c-header__fixed"),
            $have = $(".c-header__logo--small"),
            $catalog = $(".c-header__catalog"),
            $h = $target.offset().top;

        $window.on('scroll', function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > $h) {
                $target.addClass("c-header__bottom--fixed");
                $catalog.addClass('c-header__catalog--mob');
                $have.css('display', 'flex');

            } else {
                $catalog.removeClass('c-header__catalog--mob');
                $target.removeClass("c-header__bottom--fixed");
                $have.css('display', 'none');
            }
            if (document.documentElement.clientWidth < 1200) {
                $target.removeClass("c-header__bottom--fixed");
            }
        });
    });

    if ($("#fixedHeader").hasClass("c-header__bottom--fixed")) {
        alert('ok');
    }

    $(document).ready(function () {
        $('#product, #click').click(function (event) {
            event.preventDefault();
            $('#overlay').fadeIn(297, function () {
                $('.c-header-product')
                    .css('display', 'block')
                    .animate({ opacity: 1 }, 198);
                $('body')
                    .css('overflow', 'hidden');
            });
        });

        $('#overlay, #headerCatalog__close').click(function () {
            $('.c-header-product').animate({ opacity: 0 }, 198, function () {
                $(this).css('display', 'none');
                $('#overlay').fadeOut(297);
                $('body')
                    .css('overflow', 'auto');
            });
        });
    });

    


})();