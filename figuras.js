console.log("hola increible mundo digital!")

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado);


// const perimetroCuadrado = ladoCuadrado * 4 ;
// console.log("El perimetro del cuadrado es:" + perimetroCuadrado);


// const areaCuadrado = ladoCuadrado * ladoCuadrado ;
// console.log("El area del cuadrado es:" + areaCuadrado)

console.group("Cuadrados");
    function perimetroCuadrado(lado){
        return lado*4;
    }
    function areaCuadrado(lado){
        return lado*lado;
    }
console.groupEnd();

console.group("Triángulos");
    function perimetroTriangulo(lado1,lado2,base){
        return (lado1+lado2+base);
    } 
    function areaTriangulo(base,altura){
        return(base*altura)/2;
    }
        console.log("El área del triángulo es: "+areaTriangulo+"cmˆ2");
console.groupEnd();

console.group("Círculos");
function diametroCirculo(radio){
    return radio*2;}
    const PI=Math.PI;
    console.log("PI es: "+PI);
function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio);return diametro*PI;
}
function areaCirculo(radio){
    return(radio*radio)*PI;
}
console.groupEnd();

//aqui interactuamos con js 

// iniciamos con el cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro) ;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

    //acá inicia el Circulo 

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
const value = input.value;
const perimetro = perimetroCirculo(value);
alert(perimetro) ;
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
const value = input.value;
const area = areaCirculo(value);
alert(area);
}

//aca inicua el triangulo 

function calcularPerimetroTriangulo(){
    const input = document.getElementById("inputTriangulo1");
    const value1 = input.value;
    const value11 = value1 * 1;
    
    const input2 = document.getElementById("inputTriangulo2");
    const value2 = input2.value;
    const value22 = value2 * 1 ;

    
    const input3 = document.getElementById("inputTriangulo3");
    const value3 = input3.value;
    const value33 = value3 * 1;

    const perimetro = perimetroTriangulo(value11, value22, value33);

    alert(perimetro) ;
} 




function calcularAreaTriangulo(){
    const height = document.getElementById("inputAltura");
    const inputAltura = number(height);
   

    const base = document.getElementById("inputBase");
    const  inputBase = numer(base);

    // const area = areaTriangulo(input,input2,input3);    

      
    const area = areaTriangulo(inputAltura, inputBase);
    
   
    alert(area);



}