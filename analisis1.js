//helpers
function esPar(numerito){
    return (numerito % 2 === 0);
};
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
   function (valorAcumulado = 0, nuevoElemento) {
     return valorAcumulado + nuevoElemento;
   }
 );

 const promedioLista = sumaLista / lista.length;
return promedioLista;
}

// calculadora de mediana // 
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.lenght)) {
    const personitaMitad1 = lista[mitad - 1]; 
    const personitaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2])
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
} 
}

// mediana general
const salariosCol = colombia.map(
    function (personita){
        return personita.salary;
    }
)
const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);
const medianaGeneralCol  = medianaSalarios(salariosColSorted);


// mediana del 10 top%

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
  spliceStart,
  spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

// retorno consola

console.log({
    medianaGeneralCol,
    medianaTop10Col,
  });

