/**{
 obj = {
    propriedade : valor
 } */
let carro = {
    modelo : "Megane Grand Tour Privilege",
    ano : 2009,
    cor : "Beje",
    registro : {
        chassi : "GASDASGFSAASFFADSADAS",
        placa : "MMM-2C20",
        renavam : "12345678909"
    } 
}


let carros = [
    carro 
]
// console.log(carros);

carros.push({
    modelo : "Porche Carrara",
    ano : 2022,
    cor : "Preto",
    registro : {
        chassi : "GASDASGFSAASFFADSADAS",
        placa : "MMM-2C20",
        renavam : "12345678909"
    } 
})

console.log(carros)