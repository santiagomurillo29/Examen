// 6. Crear una función que haga la cuenta regresiva y que tome como parámetro numeroInicial recuerde utilizar en este caso el metodo push()

// Push(): nos permite añadir un nuevo elemento al final de un array

function cuentaRegresiva(array) {
    
    array.sort(function(a, b){return b - a})
    return array
}

console.log(cuentaRegresiva([3,23,12]))