    
     $('.d10ec-trend-product .ec-trend-slider').slick({
        rows: 1,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
            }
        ]
    });

  
var $ecproduct = $('.ec-product-tab,.d10ec-trend-product').find('.ec-opt-swatch');

function initChangeImg($opt) {
    $opt.each(function () {
        var $this = $(this),
            ecChangeImg = $this.hasClass('ec-change-img');



        $this.on('mouseenter', 'li', function () {
            var $this = $(this);
            var $load = $(this).find('a');

            var $proimg = $this.closest('.ec-product-inner').find('.ec-pro-image');

            if (!$load.hasClass('loaded')) {
                $proimg.addClass('pro-loading');
            }

            var $loaded = $(this).find('a').addClass('loaded');

            $this.addClass('active').siblings().removeClass('active');
            if (ecChangeImg) {
                hoverAddImg($this);
            }
            setTimeout(function () {
                $proimg.removeClass("pro-loading");
            }, 1000);
            return false;
        });


    });
}

function hoverAddImg($this) {
    var $optData = $this.find('.ec-opt-clr-img'),
        $opImg = $optData.attr('data-src'),
        $opImgHover = $optData.attr('data-src-hover') || false,
        $optImgWrapper = $this.closest('.ec-product-inner').find('.ec-pro-image'),
        $optImgMain = $optImgWrapper.find('.image img.main-image'),
        $optImgMainHover = $optImgWrapper.find('.image img.hover-image');

    if ($opImg.length) {
        $optImgMain.attr('src', $opImg);
    }
    if ($opImg.length) {
        var checkDisable = $optImgMainHover.closest('img.hover-image');
        $optImgMainHover.attr('src', $opImgHover);
        if (checkDisable.hasClass('disable')) {
            checkDisable.removeClass('disable');
        }
    }
    if ($opImgHover === false) {
        $optImgMainHover.closest('img.hover-image').addClass('disable');
    }
}
$(window).on('load', function () {
    initChangeImg($ecproduct);
});

$("document").ready(function () {
    initChangeImg($ecproduct);
});

