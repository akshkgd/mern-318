let api = 'http://www.omdbapi.com/?apikey=61e576a4&t=';


function searchMovie() {
    let userInput = document.getElementById('movieName').value;
    let searchKeyword = api + userInput;
    console.log(searchKeyword)
    fetch(searchKeyword)
        .then(function (response) {
            return response.json();

        })
        .then(function (data) {
            console.log(data);
            
        });
}
