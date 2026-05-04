// Task 1.
let a = 7;
let b = 9;
let m = a * b;
console.log(m);


// Task 2.
let c = 7;
let d = 9;
document.querySelector('.out-2').innerHTML = c/d;


// Task 3.
let e = 3;
let f = 5;
document.querySelector('.out-3').innerHTML = e + f;

// Task 4.
let e1 = '3';
let f1 = 5;
document.querySelector('.out-4').innerHTML = e1 + f1;

// Task 5.
let e2 = 3;
let f2 = 0;
document.querySelector('.out-5').innerHTML = e2/f2;

// Task 6.
let e3 = 3;
let f3 = 'Hello';
document.querySelector('.out-6').innerHTML = e3 + f3;

// Task 7.
let e4 = 3;
let f4 = 'Hello';
document.querySelector('.out-7').innerHTML = e4 * f4;


// Task 8.
let inputIn = document.querySelector('.i-8');
let button = document.querySelector('.b-8');
let out8 = document.querySelector('.out-8');

button.onclick = function t8() {   
    let val = inputIn.value;
    out8.innerHTML = val;
}


// Task 9.
let button2 = document.querySelector('.b-9');
let inputIn2 = document.querySelector('.i-9');
let out9 = document.querySelector('.out-9');


button2.onclick = function t9() {
    let val2 = inputIn2.value;
    out9.innerHTML = val2;
    inputIn2.value = '';
}


// Task 10.
let inputIn3 = document.querySelector('.i-10');
let button3 = document.querySelector('.b-10');
let out10 = document.querySelector('.out-10');

button3.onclick = function t10() {   
    let val3 = inputIn3.value;
    out10.innerHTML = val3 * 20;
}


// Task 11.
let inputIn4 = document.querySelector('.i-11');
let button4 = document.querySelector('.b-11');
let out11 = document.querySelector('.out-11');

function t11() {
    let val4 = inputIn4.value;
    out11.innerHTML = val4 + 55;
}


document.querySelector('.b-11').onclick = t11;

// Task 12.
let lastName = document.querySelector('.i-12-1').value;
let firstName = document.querySelector('.i-12-2').value;

function t12() {
    document.querySelector('.out-12').textContent 
    =`Hello ${lastName} ${firstName}`;
    
}


document.querySelector('.b-12').onclick = t12;

// Task 13.

function t13() {
    let number1 = +document.querySelector('.1-13-1').value;
    let number2 = +document.querySelector('.1-13-2').value;
    document.querySelector('.out-13').textContent
     = number1 + number2;
}

document.querySelector('.out-19').textContent
    = number1 + number2;

document.querySelector('.b-13').onclick = t13;

// Task 14.

function t14() {
    
}


document.querySelector('.b-14').onclick = t14;

// Task 15.

function t15() {

}

document.querySelector('.b-15').onclick = t15;

// Task 16.

function t16() {
    
}
document.querySelector('.b-16').onclick = t16;

// Task 17.


function t17() {
    
}

document.querySelector('.b-17').onclick = t17;

// Task 18.


function t18() {
    
}

document.querySelector('.b-18').onclick = t18;

// Task 19.

function t19() {
    let number1 = +document.querySelector('.i-19-1').value;
    let number2 = +document.querySelector('.i-19-2').value;
    if(number1 < 0 && number2 < 0){
        output.textContent = number1 + number2;
    }
    else{
        output.textContent = 'Ваші числа не від';
    }
}

document.querySelector('.b-19').onclick = t19;

// Task 20
let count = 0;


function t20() {
    count++;
    let out = document.querySelector('.out-20');
    out.textContent = count ;
}

document.querySelector('.b-20').onclick = t20;