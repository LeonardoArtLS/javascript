/**
 * armazenamento de informações no navegador
 * 1. cookies -> armazena uma string de informações
 * 2. localstorage
 * 3. sessionStorage
 */ 



//USANDO COOKIE
// document.cookie = "user=50; time=19:15";
// document.cookie = "username=Diego;expires=";

//mostrando cookie como uma array no console 
//let cookies = document.cookie.split(';')
// console.log(cookies);



//LOCAL STORAGE
/**
 * fica salvo para sempre(até o usuário apagar)
 * setItem -> seta um item, grava um item
 * getItem -> tras o item
 */
// localStorage.setItem("usuario", JSON.stringify{
//     nome: "Leonardo",
//     user: "Conta",
//     ultimoAcesso: "data"
// })
// console.log(localStorage.getItem("usuario"));



//SESSION STORAGE
/**
 * é igual ao local storage porem só dura até o usuário fechar o navegador
 * sessionStorage.setItem()
 * sessionStorage.getItem()
 * 
 */
