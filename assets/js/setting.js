jQuery(function () {
    jQuery("#camera_wrap_1").camera({
        height: "500px",
        loader: "bar",
        pagination: false,
    });
});
$(window).load(function () {
    $(".flexslider1").flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 174,
        itemMargin: 20,
        pausePlay: true,
        start: function (slider) {
            $("body").removeClass("loading");
        },
    });
});
