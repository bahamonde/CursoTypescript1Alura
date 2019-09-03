class Negociacao {
    //o JS aceita os atributos declarados diretamente no construtor 
    constructor(data, quantidade, valor) {
        this._data = data; //o underline é uma convenção indicando que não se deve modificar essa propriedade diretamente (modificar o codigo)
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
