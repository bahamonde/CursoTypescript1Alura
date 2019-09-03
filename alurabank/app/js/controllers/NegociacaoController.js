class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade'); //id's do HTML
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault(); //para nao recarregar a pagina quando chamar esse metodo
        const negociação = new Negociacao(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        console.log(Negociacao);
    }
}
