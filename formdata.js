const form = document.querySelector('form');

form.addEventListener('submit', () => {
    let dados = new FormData(form)

    //metodos da classe
    // dados.append('nomeCampo', 'valorCampo')
    // dados.metodo 

    for(dado of dados.values()){
        console.log(dado);
    }
})