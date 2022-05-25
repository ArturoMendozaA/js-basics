//We can use template literals para no usar espacios y que nuestro código se vea mejor
//Performing a task
function greet(name, lastName) {
    console.log('Hello, ' + name + ' ' + lastName)
}
// Calculates a value
function square(number){
    return number * number;
}

let number = square(2);
//console.log is also a function call
console.log(number)



greet('Jaimito', 'Apeido')
console.log(square(2))

//function is a set of statements that either perform a task or calculate a value