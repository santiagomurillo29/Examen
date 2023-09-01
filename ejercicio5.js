// 5. Crear función que sume dos arreglos y que el resultado se agregue en un nuevo arreglo

function sumaArreglos(array1, array2) {

    let Array = []

    for(let i = 0; i < array1.length; i++){
        suma = array1[i] + array2[i]

        Array.push(suma)
    }
    return Array

}

const arreglo1 = [1,2,3,4,5]
const arreglo2 = [1,2,3,4,5]

console.log(sumaArreglos(arreglo1, arreglo2))