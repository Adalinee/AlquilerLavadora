let usuario = parseInt((prompt('Digite que lavadora desea usar: 1 Lavadora grande 2 Lavadora pequeña: ')));
let tiempo = parseInt((prompt('Por cuantas horas desea alquilar la lavadora: ')));
let cantidad = prompt('cuantas lavadoras desea alquilar? ')
let resultFinal = operacion(usuario,tiempo,cantidad)

console.log(resultFinal)

function operacion(usuario, tiempo, cantidad){
    if(usuario == 1){
    pago = tiempo * 4000 * cantidad
    
    }else {
    pago = tiempo * 3000 * cantidad
    }
    
    if(cantidad >= 3){
        descuento = pago *0.03
        pago = pago - descuento
    }
    return pago
}