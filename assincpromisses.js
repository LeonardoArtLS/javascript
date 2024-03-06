/**
 * promises são promessas
 * é uma classe que permite a constrição de funções
 * de procesamento assincrono.
 * representa um valor que poderá estar disponível  no futuro.
 */


// SINTAXE
// new Promise( (resolve, reject) -> {

// } )
/**
 * EXEMPLO 1
 * 
 */
const timeout = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })
}

timeout(3000).then(function(){
    console.log("passou 3 segundos");
})
