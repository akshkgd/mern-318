// let btn = document.getElementById('btn');
// btn.addEventListener('click', roll)
let testBtn = document.getElementById('test');
testBtn.addEventListener('click', test)

let title = document.getElementById('title')
title.addEventListener('click', titleTest)



function roll(){
    let randomNumber = Math.floor(Math.random()*6);
    let number = document.getElementById('number');
    let dice = document.getElementById('dice');
    number.innerText = ''
    dice.classList.add('animate-dice');
    setTimeout(()=>{
        dice.classList.remove('animate-dice');
        number.innerText = randomNumber;
    }, 4002)
}

function test(){
    // testBtn.style.backgroundColor = 'blueviolet'

}


function titleTest(e){
    // console.log(e.target.baseURI)
    console.log(e.target.innerText)
}


let container = document.getElementById('container');
container.innerHTML = '<h1> this is innerText heading!!</h1>'