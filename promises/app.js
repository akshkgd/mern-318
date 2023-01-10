function fetchQuote(){
    let randomQuote = Math.floor(Math.random()* 1000)
    fetch("https://type.fit/api/quotes")
  .then((response)=> {
    return response.json();
    console.log(response.json())
  }).then((data)=> {
    console.log(data[randomQuote].text);
    document.getElementById('quote').innerText = data[randomQuote].text;
    document.getElementById('author').innerText = data[randomQuote].author;

  });
}
  

  fetchQuote()