// faça uma promisse que verifique se a idade informada corresponde ao ano de nascimento informado
// ex 1985 - 38 anos

const calculo = () => {
    return new Promise( (resolve, reject) => {
        let date = new Date();
        let ano = 2005;
        let idade = 18;
        let calculo = date.getFullYear() - ano;
        if(calculo == idade){
            resolve("Idade correta");
        }else{
            reject(new Error("Idade incorreta"));
        }
    })
}

calculo('')
    .then(correta => console.log(correta))
        .catch(errada => console.log(errada.message))