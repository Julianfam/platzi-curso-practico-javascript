function calcularMediaAritmetica(lista) {
         const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
          return valorAcumulado + nuevoElemento;
        }
      );
    
      const promedioLista = sumaLista / lista.length;
    
      return promedioLista;
    }


const lista1 = [
    100, 
    200,
    500,
    410000,
];

const mitadLista1 = parseInt(lista1.length / 2);

// funcion lista par 

function esPar(numerito){
if (numerito % 2 === 0){
return true;
}
else {
    return false;
}}
// funcion calcular mediana 

let mediana;
if (esPar(lista1.length)){
    const elemento1 = lista1 [mitadLista1];
    const elemento2 = lista1 [mitadLista1 - 1];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    mediana = promedioElemento1y2
}
else{
    mediana = lista1[mitadLista1]
} 

//inicio del reto//
function calcularMediana (listado){
    listado.sort();
    esPar(listado);
    const lista1 = [];

}

// crear funcion, "calcular mediana"
// lista de numeros debe estar ordenada, toca agregar el comando sortof, 
