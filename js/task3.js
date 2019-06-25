$(document).ready(function () {


    $('#addBtn').on('click', function (e) {
        e.preventDefault();

        var newId = Number($('#book-list').find('.btn').last().attr('data-id')) + 1;
        var newBook = {
            "id": newId,
            "isbn": $('#isbnId').val(),
            "title": $('#titleId').val(),
            "author": $('#authorId').val(),
            "publisher": $('#publisherId').val(),
            "type": $('#typeId').val(),

        }

        $.ajax({
            url: "http://localhost:8282/books/",
            data: JSON.stringify(newBook),
            type: "POST",
            dataType: "json",
            contentType: "application/json"
        }).done(function () {
            alert('Dodano książkę');
            loadBooks();
        });

    });

});