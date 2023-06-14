// divListaProduto.insertAdjacentHTML('afterbegin', '');

class MeuError extends Error {
    constructor(message){
      super(message);
      this.name = "¡Erro! ¡Campos não preenchidos!";
    }
  }

class Produtos{
    constructor( nome , dataDCadrastro, descricao , preco){
        this.nome = nome
        this.dataDCadrastro = dataDCadrastro
        this.descricao = descricao
        this.preco = preco
    }

    mostrarAtributosPadrao(){
        try {
          return this.mostrarDadosPadrao();  
        } catch (error) {
          console.log(error) 
        }
      } 

mostrarDadosPadrao(){
    if((this.nome != "") && (this.descricao != "") && (this.preco != "") && (this.dataDCadrastro != "")){
    return`
    <div class="produto-padrao">
    <h1>${this.nome}</h1>
    <br>
    <div>${this.descricao}</div>
    <h3>Preço: ${this.preco},00</h3>
    <p>${ this.dataDCadrastro}</p> 
    </div>`
    }else{
        throw new MeuError("Algum campo no produto padrão")
    }
   }
}

class ProdutoDestaque extends Produtos{
    constructor(nome , dataDCadrastro, descricao , preco , imagem){
    super(nome , dataDCadrastro, descricao , preco)
    this.imagem = imagem
    }

    mostrarAtributosDestaque(){
        try {
          return this.mostrarDadosDestaque();  
        } catch (error) {
          console.log(error) 
        }
      } 

    mostrarDadosDestaque(){
        if((this.nome != "") && (this.descricao != "") && (this.preco != "") && (this.dataDCadrastro != "")&& (this.imagem != "")){
        return`
        <div class="produto-destaque">
        <h1>${this.nome}</h1>
        <img src="${this.imagem}">
        <div>${this.descricao}</div>
        <h3>Preço: ${this.preco},50</h3>
        <p>${this.dataDCadrastro}</p>
        </div> `
        }else{
            throw new MeuError("Algum campo no produto destaque")
        }
       }
       
    }
    





const produto = new Produtos ("Sabão de coco", "22/08/2023", "Sabão feito de coco" , 2)
const produto2 = new Produtos ("Sabão de maracuja ", "16/08/2023", "Sabão feito de maracuja" , 2)
const produto3 = new Produtos ("Sabão de limão ", "16/08/20230", "Sabão feito de limão" , 2)
const produtoDestaque = new ProdutoDestaque ("", "22/08/2023", "Sabão feito de Laranja" , 2 , "https://blog.sodabel.com.br/wp-content/uploads/2022/11/sabao-de-laranja.jpg" )
console.log(produto.mostrarDadosPadrao())
console.log(produto2.mostrarDadosPadrao())
console.log(produtoDestaque.mostrarDadosDestaque())

const produtoPadrao = document.getElementById("lista-produtos")
produtoPadrao.insertAdjacentHTML('afterbegin', produto.mostrarDadosPadrao())
const produtoPadrao2 = document.getElementById("lista-produtos")
produtoPadrao.insertAdjacentHTML('afterbegin', produto2.mostrarDadosPadrao())
const produtoPadrao3 = document.getElementById("lista-produtos")
produtoPadrao.insertAdjacentHTML('afterbegin', produto3.mostrarDadosPadrao())
const produtoDestaqueMostrar = document.getElementById("produto-destaque")
produtoDestaqueMostrar.insertAdjacentHTML('afterbegin', produtoDestaque.mostrarDadosDestaque())