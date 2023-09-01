// 1. Crear una función que obtenga número mayor de una matriz 4x4 y que
//  tome como parámetro matriz 

function numeroMayor(matriz) {
    numeroM = matriz[1][1]

    
    for (let i = 0; i < 4; i++ ){

        for(let j = 0; j < 4; j++){

            if(numeroM < matriz[i][j]){
                numeroM = matriz[i][j]
            }
            
        }
    }
    return numeroM
}

const mat = [
    [5,2,3], 
    [5,6,7,8], 
    [5,4], 
    [2,4,7,8]
]


console.log(numeroMayor(mat))