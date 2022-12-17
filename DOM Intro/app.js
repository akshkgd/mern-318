function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the Full stack Course! 🎉';
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
}

// cube app
function cube(){
    let number = document.getElementById('number').value;
    let result = number * number * number;
    document.getElementById('result').innerText = result;
    document.getElementById('number').value = ''
}

// bill split app
function split(){
    let amount = document.getElementById('amount').value;
    let persons = document.getElementById('persons').value;
    let bill = (amount / persons).toFixed(2);
    document.getElementById('result').innerText = bill;
}

// math practice app
var num1 = 0;
var num2 = 0;
function initAdd(){
    let num1 = Math.floor(Math.random()*100);
    let num2 = Math.floor(Math.random()*100);
    document.getElementById('num1').value = num1;
    document.getElementById('num2').value = num2;
}
function add(){
    
    
    console.log(num1, num2)

    let temp1 = num1;
    let temp2 = num2;
    let userSum = document.getElementById('sum').value;
    if(temp1 + temp2 == userSum){
        console.log(temp1, temp2, userSum)
        console.log('correct');
        let num1 = Math.floor(Math.random()*100);
        let num2 = Math.floor(Math.random()*100);
        document.getElementById('num1').value = num1;
        document.getElementById('num2').value = num2;
    }
    else{
        console.log(temp1, temp2, userSum)
        console.log('incorrect')
    }
}
initAdd()
// bmi



