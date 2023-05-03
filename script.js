// divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produtos{
    constructor( nome , dataDCadrastro, descricao , preco){
        this.nome = nome
        this.dataDCadrastro = dataDCadrastro
        this.descricao = descricao
        this.preco = preco
    }

mostrarDados(){
    return`
    <h1>${this.nome}</h1>
    <div>${this.descricao}</div>
    <h3>${this.preco}</h3>
    <p>${ this.dataDCadrastro}</p> `
    //return "Produto: " +  this.nome + " " + "Data de Cadastro: " + this.dataDCadrastro + " " + "Descrição: " + this.descricao + " " + "Preço: " + this.preco
}
}

class ProdutoDestaque extends Produtos{
    constructor(nome , dataDCadrastro, descricao , preco , imagem){
    super(nome , dataDCadrastro, descricao , preco)
    this.imagem = imagem
    }
    mostrarDadosDestaque(){
        return`
        <h1>${this.nome}</h1>
        <img src="${this.imagem}">
        <div>${this.descricao}</div>
        <h3>${this.preco}</h3>
        <p>${ this.dataDCadrastro}</p> `
       // return "Produto: " +  this.nome + " " + "Data de Cadastro: " + this.dataDCadrastro + " " + "Descrição: " + this.descricao + " " + "Preço: " + this.preco + " " + this.imagem
    }
    

}



const produto = new Produtos ("Sabão de coco", "22/08/2023", "Sabão feito de coco" , 2)
const produtoDestaque = new ProdutoDestaque ("Sabão de Laranja", "22/08/2023", "Sabão feito de Laranja" , 2 , "https://www.google.com/imgres?imgurl=https%3A%2F%2Fblog.sodabel.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fsabao-de-laranja.jpg&tbnid=XSvBPo4re5BorM&vet=12ahUKEwjbwN2x6bb-AhVFCbkGHZgrCqsQMygFegUIARDTAQ..i&imgrefurl=https%3A%2F%2Fblog.sodabel.com.br%2Ftag%2Fcomo-fazer-sabao-de-laranja%2F&docid=O5sxg4l18Q9zYM&w=1178&h=785&q=sab%C3%A3o%20de%20laranja&ved=2ahUKEwjbwN2x6bb-AhVFCbkGHZgrCqsQMygFegUIARDTAQ" )
console.log(produto.mostrarDados())
console.log(produtoDestaque.mostrarDadosDestaque())

const produtoPadrao = document.getElementById("lista-produtos")
produtoPadrao.insertAdjacentHTML('afterbegin', produto.mostrarDados())

const produtoDestaqueMostrar = document.getElementById("produto-destaque")
produtoDestaqueMostrar.insertAdjacentHTML('afterbegin', produtoDestaque.mostrarDadosDestaque())