//programação funcional

//map - pega os dados da array e da para fazer contas com elas sem modificar a array original(meio que cria uma nova array com os dados da array original)

// let dados = [3, 4, 5, 6]

// let dadosNovo = dados.map(function(novaarray){
//     return novaarray * 3
// })

// console.log(dadosNovo);



//filter
// let dados = [6, 11, 300, 120, 55]

// let resultado = dados.filter(function(d){
//     return d > 50
// })
// console.log(resultado);


//filter com objeto de array
// let pessoas = [
//     {
//         nome: "Leonardo",
//         idade: 18
//     },
//     {
//         nome: "Lucas",
//         idade: 15
//     },
//     {
//         nome: "Diego",
//         idade: 38
//     }
// ]

// let resultado = pessoas.filter((pessoa) => {
//     return pessoa.idade >= 18
// })

// console.log(resultado)



// reduce 

let numeros = [10, 20, 30, 60]

let resultado = numeros.reduce(function(total, numero){
    return (total + numero)
})

console.log(resultado / numeros.length);