// // Crear una función que obtenga la fila más larga de una matriz, que tome como parámetro matriz

function obtenerFilaLarga(matriz){
    let filaLarga = matriz[0]

    for (let i = 0; i < matriz.length; i++){
        if(matriz[i].length > filaLarga.length){
            filaLarga = matriz[i]
        }
    }
    return filaLarga
}


const mat = [[1, 2], [3, 4, 5, 6], [7,8,9] [10]]
console.log(obtenerFilaLarga(mat))


