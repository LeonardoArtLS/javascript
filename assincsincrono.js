let a = 3;
let b = 3;
/**
 * exemplo de codigo sincrono
*/

// console.log("Síncrono: ", a + b);
// a = 6;
// console.log("Síncrono 2", a + b);


// Assincrono
setTimeout( () => {
    console.log("assincrono", a + b);
}, 3000)

a = 9;

console.log("Assincrono 2")