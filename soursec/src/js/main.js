
let joinAsCarrierButton = $('.carriers__join-button');
let addCommentsButton = $('.comments__add-button');


joinAsCarrierButton.on('click', function () {
    $('.join-carriers-modal').modal({
        centered: false
    }).modal('show')
    ;
});

addCommentsButton.on('click', function () {
    $('.add-comments-modal').modal({
            centered: false
    }).modal('show');
});

$('.ui.rating').rating();

