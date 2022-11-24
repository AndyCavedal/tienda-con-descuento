const inputPrice = document.querySelector('#price');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');
const descuentoChurrico = document.getElementById('churrico');
const descuentoSummer = document.getElementById('summer'); 
const descuentoWinter = document.getElementById('winter');
const inputCoupon = document.querySelector('#coupons');


// Crear validifacion para cupones escritos, con array o con clase.

class Coupon {
    constructor(name, discount) {
        this.name = name,
        this.discount = discount
    } 
}

const coupons = [];

coupons.push(new Coupon('D30', 30), new Coupon('D25', 25), new Coupon('D20', 20), new Coupon('andy', 15));

console.log('Los cupones disponibles son: D30, D25, D20, andy')

inputCoupon.addEventListener('click', uncheckInput)
btn.addEventListener('click', calcularDescuento);

function uncheckInput() {
   descuentoChurrico.checked = false;
   descuentoSummer.checked = false;
   descuentoWinter.checked = false;
}

function calcularDescuento() {


    const cuponValido = coupons.find(item => item.name == inputCoupon.value);

    const price = Number(inputPrice.value);
    const churrico = 15;
    const verano = 20;
    const invierno = 10;

    
    if (descuentoChurrico.checked == true) {
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
    } else if (cuponValido != undefined) {
        const total = (price * (100 - cuponValido.discount)) / 100;
        pResult.innerText = 'El nuevo precio con descuento cupon personal es de $' + total;
        return;
    }
    else {
        pResult.innerText = 'Porfavor, elije uno de los descuentos disponibles 🙄';
    }
    
}

