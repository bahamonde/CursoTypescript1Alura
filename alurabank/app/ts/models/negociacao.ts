class Negociacao {

    //para o TS entender e criar os arquivos rodando em JS deve-se declarar as propriedades dessa maneira tbm para não dar erro 
    private _data;
    private _quantidade; //o private bloqueia o atributo realmente. Não é apenas uma convenção. Encapsula os atribuitos da classe 
    private _valor;

    //o JS aceita os atributos declarados diretamente no construtor 
    constructor(data, quantidade, valor) {
         
        this._data = data;    //o underline é uma convenção indicando que não se deve modificar essa propriedade diretamente (modificar o codigo)
        this._quantidade = quantidade; //para alterar é preciso usar os metodos da classe 
        this._valor = valor;
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}

