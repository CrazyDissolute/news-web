require(['main'], function () {
    require(['swiper'], function (Swiper) {
        var swiper = new Swiper('#focus-news-images', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },
        });
    })
})