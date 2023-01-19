let title = document.getElementById('title');
let desc = document.getElementById('desc');
let year = document.getElementById('year');
let genre = document.getElementById('genre');
let actors = document.getElementById('actors');
let director = document.getElementById('director');
let earnings = document.getElementById('earnings');
let ratings = document.getElementById('ratings');
let img = document.getElementById('img');
let awards = document.getElementById('awards')
let container = document.getElementById('container')
let loader = document.getElementById('loader')
let api = 'http://www.omdbapi.com/?apikey=61e576a4&t=';


function searchMovie() {
    loader.classList.add('loader')
    let userInput = document.getElementById('movieName').value;
    let searchKeyword = api + userInput;
    console.log(searchKeyword)
    fetch(searchKeyword)
        .then(function (response) {
            return response.json();

        })
        .then(function (data) {
            console.log(data);
            title.innerText = data.Title;
            desc.innerText = data.Plot;
            actors.innerText = data.Actors;
            director.innerText = data.Director;
            ratings.innerText = data.Ratings[0].Value;
            earnings.innerText = data.BoxOffice;
            img.src = data.Poster;
            awards.innerText = data.Awards;
            year.innerText = data.Year;
            container.classList.remove('d-none')
            loader.classList.remove('loader')
        });
}
