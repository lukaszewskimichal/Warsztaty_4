function ajaxQuery(method, id = '', data = {}) {

    if (method === 'GET') {
        var id = '';
        var data = {};
    } else if (method === "DELETE") {
        var data = {};
    } else if (method === "POST") {
        var id = '';
    }

    $.ajax({
        url: "http://localhost:8282/books/" + id,
        data: data,
        type: method,
        dataType: "json",
        contentType: "application/json"
    }).done(function (result) {
        if (method === 'GET') {
            createBooks(result);
        } else if (method === "DELETE") {
            alert('Usunięto książkę');
            loadBooks();
        }else if (method === "POST") {
            alert('Dodano książkę');
            loadBooks();
        }

    })
}