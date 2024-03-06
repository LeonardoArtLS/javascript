/**
 * verobs http
 * GET -> trazer dados (padrão)
 * POST -> enviar dados 
 * OUT -> editar dados
 * DELETE -> deletar dados
 */

const selEstados = document.querySelector("#estado");

selEstados.addEventListener("change", () => {
    let selecionado = this.value;

    //consultar a api
    let estrutura = '<option value="">Selecione</option>';

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selecionado}/municipios`)
        .then(retorno => retorno.json())
        .then((cidades) => {
            //laço de repeticao para preencher as cidades
            for(posicao in cidades){
                estrutura += `<option value="${cidades[posicao].cidades}">${cidades[posicao].nome}</option>`;
            };

            //carregar dados no select
            document.querySelector("#cidade").innerHTML = estrutura;
        })
})