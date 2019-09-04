class Negociacao {

    /* ----------------------------------------------------------------------------------------------------------

    ESSA PARTE É NECESSÁRIA SE DEIXAR O TIPAGEM DEFAULT 'ANY' (SEM DECLARAR)

    //para o TS entender e criar os arquivos rodando em JS deve-se declarar as propriedades dessa maneira tbm para não dar erro 
    private _data: Date;  //no TS o tipo vem depois da propriedade. O default é tipo 'any' (aceita qualquer tipo -string/float/boolean/etc) se vc não colocar nada. 
    private _quantidade:number; //o private bloqueia o atributo realmente. Não é apenas uma convenção. Encapsula os atribuitos da classe 
    private _valor:number;

    //o JS aceita os atributos declarados diretamente no construtor 
    constructor(data:Date, quantidade:number, valor:number) {
         
        this._data = data;    //o underline é uma convenção indicando que não se deve modificar essa propriedade diretamente (modificar o codigo)
        this._quantidade = quantidade; //para alterar é preciso usar os metodos da classe 
        this._valor = valor;
    }
    
    -------------------------------------------------------------------------------------------------------- --- */


    // SE FOR DECLARAR TODAS AS TIPAGENS PODE USAR O 'ATALHO' DO CONSTRUCTOR QUE O TS FAZ O JS ENTENDER IMPLICITAMENTE TODO O BLOCO DE CÓDIGO ANTERIOR
    constructor(private _data:Date, private _quantidade:number, private _valor:number){}
    
    
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

