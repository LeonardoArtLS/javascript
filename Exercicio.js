// Crie um algorítimo para armazenar dados de locação de um veículo.
// a) utilize objetos para criar os dados do veículo e os dados de locação
// b) utilize funções para calcular o valor de locação baseado em diárias e km percorridas
// c) utilize laços de repetição para cadastrar 3 veículos locados (é neste ponto que os cálculos serão realizados)
// d) utilize laços de repetição para listar os dados já com os cálculos efetuados dos veículos


let prompt = require('prompt-sync')();

let dias; let km; let precoKm; let precoDia;

let planoDias; let planoKm;

let marca; let modelo; let ano; let cor; let placa;

let carros = [];

let quantiacarros = prompt("Determine a quantidade de veículos a serem cadastrados: ");

do {

    marca = prompt("Marca: ");
    modelo = prompt("Modelo: ");
    ano = prompt("Ano: ");
    cor = prompt("Cor: ");
    placa = prompt("Placa: ");
    dias = prompt("Digite a quantia de dias que o carro será utilizado: ");
    km = prompt("Digite a quantia de kilometros que o carro percorrera: ");
    precoKm = prompt("Digite o preço do litro de gasolina gasto por kilometro: ");
    precoDia = prompt("Digite a quantia do preço pela diaria: ");


    (() => {
        planoDias = precoDia * dias;
        planoDias = planoDias.toFixed(2);
        return planoDias;
    })();

    (() => {
        planoKm = (precoKm * km);
        planoKm = planoKm.toFixed(2);
        return planoKm;
    })();

    carros.push({
        marca: marca,
        modelo: modelo,
        ano: ano,
        cor: cor,
        placa: placa,
        locacao: {
            precoDia: precoDia,
            dias: dias,
            km: km,
            precoKm: precoKm,
            planoDias: planoDias,
            planoKm: planoKm
        }
    })

} while (carros.length < quantiacarros);



for (car in carros) {
    console.log(`
        ------------  INFORMAÇÕES -----------
        Marca: ${carros[car].marca}
        Modelo: ${carros[car].modelo}
        Ano: ${carros[car].ano}
        Cor: ${carros[car].cor}
        Placa: ${carros[car].placa}
        Valor Diária - R$ ${carros[car].locacao.planoDias}
        Valor Quilometragem - R$ ${carros[car].locacao.planoKm}
        ------------------------------------
    `)
};