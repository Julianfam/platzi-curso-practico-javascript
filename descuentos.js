// const precioOriginal = 120;
// const descuento = 18;

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     preciocondescuento
// })

function calcularPrecioConDescuento(precio, descuento){
    
    const porcentajePrecioConDescuento = 100 - descuento;
    const preciocondescuento = (precio * porcentajePrecioConDescuento)/100;
    return preciocondescuento;
}

function preciopostdescuento(){
    const precio = document.getElementById("precio");
    const precioop = precio.value;

    const descuento = document.getElementById("descuento");
    const descuentoop = descuento.value;

    const precioFinal = calcularPrecioConDescuento ( precioop, descuentoop);
    // alert(precioFinal);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento es $" + precioFinal;
}







