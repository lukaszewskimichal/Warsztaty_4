function showDetails() {
    var booksBtns = $('#book-list').find('.btn-lg');

    booksBtns.on('click', function () {
        $(this).parent().next().toggle();

    });
};