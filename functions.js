//statements that perform a task
function greet(){
    //body of this function
    console.log('Hello, World')

}

// We call the function like this:
greet()
//we can have inputs 
//here we add a parameter
function graat(paraName){
    console.log('Hello, ' + paraName);
}
//Llamando a la función 'John' es un argumento para la funcion greet
graat('John')
graat('Mary')

//Una función puede tener varios parámetros separados por una ','

function gruut(name, lastName){
    console.log('Hello, '+ name + ' ' + lastName)
}
gruut('Peps', 'Guardiola')
// si no pasamos un segundo argumento cuando un segundo argumento está declarado, el valor que se agrega por default (como en las variables), será undefined
gruut('Peps')

gruut('Fulanito', 'No Sé Qué')