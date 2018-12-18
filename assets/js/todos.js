// Check off specific Todos by clicking
$('ul').on('click', 'li', function() {
    $(this).toggleClass('completed')
})


// Click on X to delete Todos

$('ul').on('click', 'span', function(event) {
    event.stopPropagation()
    $(this).parent().fadeOut(500, function() {
        $(this).remove()
    })
})

$('input[type="text"]').keypress(function(event) {
        if (event.which === 13) { // we're checking for the enter key
            // grabbing new todo text from input
            const todoText = $(this).val()
            $(this).val("")
            
            // create a new li and add to ul
            $('ul').append(`<li><span><i class="fas fa-trash-alt"></i></span> ${todoText}</li>`)
        }
})