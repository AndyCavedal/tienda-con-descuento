const inputPrice = document.querySelector('#price');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');
const descuentoChurrico = document.getElementById('churrico');
const descuentoSummer = document.getElementById('summer'); 
const descuentoWinter = document.getElementById('winter');


btn.addEventListener('click', calcularDescuento);


function calcularDescuento() {

    const price = Number(inputPrice.value);
    const churrico = 15;
    const verano = 20;
    const invierno = 10;

    if (descuentoChurrico.checked == true) {
        console.log('boton funciona')
        const total = (price * (100 - churrico)) / 100;
        pResult.innerText = 'El nuevo precio con descuento Churrico es $' + total;
        return;
    } 
    else if (descuentoSummer.checked == true) {
        const total = (price * (100 - verano)) / 100;
        pResult.innerText = 'El nuevo precio con descuento Verano es $' + total;
        return;
    }
    else if (descuentoWinter.checked == true) {
        const total = (price * (100 - invierno)) / 100;
        pResult.innerText = 'El nuevo precio con descuento Invierno es $' + total;
        return;
    }
    else {
        pResult.innerText = 'Porfavor, elije uno de los descuentos disponibles';
    }

}

// function calcularPrecioConDescuento() {
//     const price = Number(inputPrice.value);
//     const discount = Number(inputDiscount.value);

//     console.log({price, discount});

//     if (!price || !discount) {
//         pResult.innerText = 'Hagan caso, pongan un numero';
//         return;
//     }

//     if (discount > 100 || discount < 0) {
//         pResult.innerText = 'Introduce un descuento valido';
//         return;
//     }


//     const total = (price * (100 - discount)) / 100;

//     pResult.innerText = 'El nuevo precio con descuento es $' + total;
// }
