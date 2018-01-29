(function($){
    "use strict";
    var $grid = $('.grid').isotope({
        itemSelector: '.pht__arrange',
    });
    $grid.isotope({ filter: "*" });

    $('.btn-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
})(jQuery)