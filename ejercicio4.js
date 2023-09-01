// 4. Crear una función que obtenga la cantidad de x elemento de una matriz

function cantidadX(matriz, item) {
    
    cont = 0

    for (let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] === item){
                cont++
            }
        }
    }
    return cont
}

const mat = [
    [5,2,3], 
    [5,6,7,8], 
    [5,4], 
    [2,4,7,8]
]

console.log(cantidadX(mat, 5))