// Crear función que identifique por medio de false o true si una matriz es cuadrada y que tome como parámetro matriz

function matrizCuadrada(matriz) {

    for(let i = 0; i < matriz.length; i++){
        if(matriz[i].length !== matriz.length){
            return false
        }
    }
    return true


}


const matriz = [
    [5,2,3,4], 
    [5,6,7], 
    [5,4,1]
]

console.log(matrizCuadrada(matriz))