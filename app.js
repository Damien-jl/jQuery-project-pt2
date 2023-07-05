$('.container').on('submit', function (e) {
    e.preventDefault();
    let title = $('.title').val();
    let rate = $('.rating').val();

    addMovie(title,rating);

    $('.title').val('');
    $('.rating').val('');

    function addMovie(title,rating) {
        const newMovie = $('<div>');
        const newTitle = $('<h3>').text('Title: ' + title);
        const newRate = $('<p>').text('Rating: ' + rating);
        const deleteBtn = $('<button>').text('Delete');

        deleteBtn.on('click', function() {
            newMovie.remove();
        })

        $(newMovie).append(newTitle,newRate,deleteBtn);
        $('.movie-list').append(newMovie);
    }
})