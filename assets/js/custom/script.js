(function () {
    $('.collapse-icon').on('click', function () {
        $('.expandable-sidebar').toggleClass('shrinked');
    });

    $('#action-btn').on('click', function () {
        $('.action-dropdown').toggleClass('visible-block');

    });
    $('[data-toggle="tooltip"]').tooltip();

    var star_rating_width = $('.fill-ratings span').width();
    // Sets the container of the ratings to span width
    // thus the percentages in mobile will never be wrong
    $('.star-ratings').width(star_rating_width);

})();