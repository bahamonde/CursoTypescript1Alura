/* --------------Essa parte não é preciso se instalar o tds di jQUERY----------------
declare var $: any;  //Essa var é declarada para que possa se usar funçoes do Jquery no projeto. Isso é importante pq androids mais antigos tem incompatibilidade com TS.
*/

// O 'abstract' é um modificador do TS para não poder criar instancia dessa classe 
abstract class View<T>{  //esse '<T>' indica que é um tipo generico para aceitar qualquer tipo de resposta das classes filhas (o T é só um nome, podia ser qualquer nome) pq a classe filha'MensagemView' vai retornar um tipo 'string' nos métodos 'update e template', já a classe'NegociacoesView' vai voltar um tipo 'Negociacao'. O metodo herdade deve aceitar ambos 

    protected _elemento: JQuery;  //o 'protected é para as outras classes poderem acessar essa propriedade e tipo 'any' para aceitar osresultadosde funções do Jquery sem o TSD.Se já tiver instalado, coloca o tipo 'jquery'

constructor(seletor:string){

    this._elemento = $(seletor);  
    
}

update(model:T){  //toma cuidado para referenciar o mesmo tipo generico da classe
    
    this._elemento.html(this.template(model)); //Jquery não tem a funcao 'innerHTML' recebendo o codigo como parametro

}

/* ------------------- Metodo foi modificado para se tornar abstrado  
template(model:T): string{

    throw new Error('Você deve implemantar o metodo template');
    
}
*/

abstract template(model:T): string;  //para todas as classes que herdar ter que inplementar o metodo sobrescrevendo o tipo em sua propria classe 

}

  