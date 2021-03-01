(function () {
    $('.collapse-icon').on('click', function () {
        $('.expandable-sidebar').toggleClass('shrinked');
    });

    $('#action-btn').on('click', function () {
        $('.action-dropdown').toggleClass('visible-block');
       
    });
    $('[data-toggle="tooltip"]').tooltip();

})();