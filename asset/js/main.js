require.config({
    baseUrl: '/news-web/asset/js/',
    paths: {
        'libs': 'libs',
        'components': 'components',
        'jquery': 'libs/jquery-3.1.1.min',
        'lozad': 'libs/lozad.min',
        'css': 'libs/css',
        'semantic': 'components/semantic/semantic.min',

        'pace': 'components/pace/pace.min',
        'swiper': 'components/swiper/swiper.min',
        'swiperAnimates': 'components/swiper/swiper.animate1.0.3.min'
    },
    shim: {
        semantic: {
            deps: ['jquery']
        },
        swiper: {
            deps: ['css!components/swiper/swiper.min.css', 'jquery']
        },
        swiperAnimates: {
            deps: ['css!components/swiper/animate.min.css', 'jquery']
        }
    }
});

require(['pace', 'semantic', 'lozad'], function (pace, semantic, lozad) {
    //
    pace.start({
        document: false
    });

    //
    var observer = lozad();
    observer.observe();

})



