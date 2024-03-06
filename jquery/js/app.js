//iniciando escopo do jquery
//no jquary SOMENTE usar função anonima, NÂO usar arrow function

// $(() => {
//     //retorna a largura da janela
//     let largura = $(window).width();
//     let altura = $(window).height();

//     let resultado = `Largura: ${largura} X Altura: ${altura}`

//     $('body').html(`<h1>${resultado}</h1>`)
// })

$(() => {
    // manipular um evento
    // on(evento, seletor, callback)
    $(document).on("click", ".meuLink", function(){
        //Quando clicar vai remover de todos que ficaram vermelho e vai ativar do que clicou
        $('.meuLink').removeClass('ativo')
        $(this).addClass('ativo')
        //this está se referindo a ele mesmo(o evento, no caso "click")
        let caminho = $(this).attr('href')
        loadView(caminho)
        return false;
    })


    //controlar evento do form de lista de compras
    $(document).on("submit", "#cadastraItem", function(){
        //this está se referindo ao proprio $(document).on("submit", "#cadastraItem"
        let item = $(this).find('input').val()

        //adicionar um item na lista

        $('.listaMercado').prepend(`<li>${item} <a href="#" class="deletaItem">X</a></li></li>`)

        return false;
    })

    //remover um item da lista
    //document é oque está aberto no navegador
    $(document).on('click', '.deletaItem', function(){
        $(this).parent().remove()

        return false;
        //o return false só faz não ir la pro link do site
    })

    //aumentar caixinha
    $(document).on('click', '.clicaBloco', function(){
        //mudar a cor
        $('.bloco').css({
            'background-color' : 'black',
            'border-radius' : '5px'
        })

        $('.bloco').fadeIn(1000) 
        //fadeIn (faz aparecer suavemente)
        //fadeOut (se tiver aparecendo vai sumir suavemente)
        //show (faz aparecer)
        //hide (faz sumir)

        //aumentar caixa
            let largura = $('.bloco').width();
            let altura = $('.bloco').height();
        $('.bloco').animate({
            width: largura += 100,
            height: altura += 50,
        },1000);


        return false;
    })

    //funcao de carregamento das views
    let loadView = (pagina = 'home.html') => {
        $('.container').load(`view/${pagina}`, function(){
            $('.cpf').mask('000.000.000-00')
        })
        // o load ta passando a pasta em que esta os htmls
    }

    //CHAMAR LOADVIEW
    loadView()


    //consumir api com jquery
    $.ajax({
        url : 'http://cafepradev.com.br:21020/messages/list',
        contentType : 'json',
        success : function(dados){
            console.log(dados)
        }
    })

})