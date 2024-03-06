//new é uma palavra reservada para instanciar um objeto
let data = new Date();

// como o . serve para mostrar o filho, quando se usa o . depois do data aparece as opções
// Site com os metodos do date: "https://www.w3schools.com/js/js_date_methods.asp"
// console.log(data.getDate());


let meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

let dias = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado'
];

let extenso = `${dias[data.getDay()]}, ${data.getDate()} de ${meses[data.getMonth()]} de ${data.getFullYear()}`;
console.log(extenso);
