// fazer uma promise para calcular media de notas de um aluno
// passe como parametro 3 notas, se a média for 7 > resolve como aprovado senão reject como reprovado
const calculo = (valor1, valor2, valor3) => {
    return new Promise( (resolve, reject) => {
        let resultado = valor1 + valor2 + valor3;
        let final = resultado / 3;
        if(final >= 7){
            resolve("Aluno foi aprovado com  a média: "+ final)
        }else{
            reject(new Error("Reprovado com a média: "+ final))
        }
    })
}

calculo(7, 2, 8)
    .then(ret => console.log(ret))
    .catch(erro => console.log(erro.message))