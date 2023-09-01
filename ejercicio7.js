// 7. Crear función que filtre números mayores o iguales a 6 y que tome como parámetro un array

// Filter(): Consiste en filtrar uno o más elementos (un subconjunto) de una colección más grande de elementos (un superconjunto) basándose en alguna condición/preferencia.


function filtrarNumero (array) {

    let arrayNuevo = []

    for (let i = 0; i < array.length; i++){
        if(array[i] >= 6){
            arrayNuevo.push(array[i])
        }
    }
    return arrayNuevo
}

console.log(filtrarNumero([1,5,6,9,7]))