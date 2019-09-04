class Negociacoes {
    constructor() {
        /* ----------------------------------------------------
    
        ESSE É UM MODO DE DECLARAR UM ATRIBUTO DA CLASSE DO TIPO 'NEGOCIACAO'
        private _negociacoes:Array<Negociacao> = [];
        */
        //Esse é o outro jeito mais simplificado de declarar uma classe do tipo 'Negociacao'
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return this._negociacoes;
    }
}
