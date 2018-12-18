// Check off specific Todos by clicking
$('li').click(function() {
    $(this).toggleClass('completed')
})


// Click on X to delete Todos

$('span').click(function(event) {
    event.stopPropagation()
    $(this).parent().fadeOut(500, function() {
        $(this).remove()
    })
})