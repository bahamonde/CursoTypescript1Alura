class Negociacoes {  //vai guardar um array das informações do form para poder alterar caso queira. Sem isso, podemos apenas incluir dados

    /* ----------------------------------------------------

    ESSE É UM MODO DE DECLARAR UM ATRIBUTO DA CLASSE DO TIPO 'NEGOCIACAO'
    private _negociacoes:Array<Negociacao> = [];
    */

    //Esse é o outro jeito mais simplificado de declarar uma classe do tipo 'Negociacao'
    private _negociacoes:Negociacao[] = [];

    adiciona(negociacao:Negociacao):void{
        this._negociacoes.push(negociacao);
    }

    paraArray(){                      //é uma 'copia do array original para que não se perca informacoes
        return [].concat(this._negociacoes);
    }

    

}