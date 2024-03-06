const viacep = (cep) => {
    return new Promise((resolve,reject)=>{
        //https://viacep.com.br/ws/01001000/json/
        let resultado = fetch(`//https://viacep.com.br/ws/${cep}/json/`)
        .then(function(res){
            if(resultado.Response.status == 200){
                resolve(res)
            }else{
                reject(new Error("CEP não encontrado"))
            }
        })
    })
};

viacep('88311120')
    .then(function(resultado){
        console.log(resultado);
    })
        .catch(erro => console.log(erro.message))
