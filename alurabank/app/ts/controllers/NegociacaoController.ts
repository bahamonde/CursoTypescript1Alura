class NegociacaoController{   //responsavel por interagir com o usuario e construir uma negociação com base nos dados do formulario

private _inputData:JQuery; //tipo 'Element' pq o 'queryselector' puxa a 'tag' que no JS chama 'Element'
private _inputQuantidade: JQuery;
private _inputValor:JQuery;
private _negociacoes = new Negociacoes();
private _negociacoesView = new NegociaçoesView('#negociacoesView');
private _mensagemView = new MensagemView('#mensagemView');

constructor(){
    
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade'); //id's do HTML
    this._inputValor = $('#valor');
    this._negociacoesView.update(this._negociacoes);  //mostra as info da negociação. 
}

adiciona(event: Event){

    event.preventDefault();  //para nao recarregar a pagina quando chamar esse metodo

    const negociacao = new Negociacao (
        new Date(this._inputData.val().replace(/-/g, ',')), //Expressao regular que substitui algo
        parseInt(this._inputQuantidade.val()),  //por padrão o value sempre retorna um tipo 'string', entao a gente usa o 'parse' para converter o retorno no tipo que a propriedade pede (nesse caso a propriedade 'quantidade' é number(Int))
        parseFloat(this._inputValor.val()));


        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');

        /*
        this._negociacoes.paraArray().length=0; //'length=0' faz não ser possivel salvar informaçoes no array (é como se tivesse apagado o array)

        this._negociacoes.paraArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);

        });;

        */
}

}