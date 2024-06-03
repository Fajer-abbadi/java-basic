// 1- Write a program that prints numbers from 1 to 10 using a for loop.
for(let i=1;i<11;i+=1){
    console.log(i)

}


// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.
for(let i=2;i<11;i+=2){
    console.log(i)

}

// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.
let i=1
while(i<=10)
    {console.log(i);i+=2}


// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.

const number =prompt("Enter number:");
console.log(`multiplication table for ${number}:`);
for ( let i=1;i<=10;i+=1 ){
    console.log(`${number} x ${i} =${number*i}`)
}
// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.
let sum = 0;
let ia = 1;

while (ia <= 100) {
    sum += ia;
    ia += 1;
}

console.log(`The sum of numbers from 1 to 100 is: ${sum}`);

// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.
const numbers = prompt("Enter a number:");
const num = parseInt(number);
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(`The factorial of ${num} is ${factorial}`);



// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.
const num1= parseInt(prompt("Enter a number:"));

if (isNaN(num) || num1 < 0) {
    console.log("Please enter a valid positive number.");
} else {
    let a = 0, b = 1;

    console.log("Fibonacci Series up to " + num1 + ":");

    while (a <= num) {
        console.log(a);
        let nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
}


// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.
let i1=20;
while(i1>=5)
{console.log(i1);i1-=5}


