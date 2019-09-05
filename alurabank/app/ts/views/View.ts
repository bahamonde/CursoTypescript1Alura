// O 'abstract' é um modificador do TS para não poder criar instancia dessa classe 
abstract class View<T>{  //esse '<T>' indica que é um tipo generico para aceitar qualquer tipo de resposta das classes filhas (o T é só um nome, podia ser qualquer nome) pq a classe filha'MensagemView' vai retornar um tipo 'string' nos métodos 'update e template', já a classe'NegociacoesView' vai voltar um tipo 'Negociacao'. O metodo herdade deve aceitar ambos 

    protected _elemento: Element  //o 'protected é para as outras classes poderem acessar essa propriedade

constructor(seletor:string){

    this._elemento = document.querySelector(seletor);
    
}

update(model:T){  //toma cuidado para referenciar o mesmo tipo generico da classe
    
    this._elemento.innerHTML = this.template(model);

}

/* ------------------- Metodo foi modificado para se tornar abstrado  
template(model:T): string{

    throw new Error('Você deve implemantar o metodo template');
    
}
*/

abstract template(model:T): string;  //para todas as classes que herdar ter que inplementar o metodo sobrescrevendo o tipo em sua propria classe 

}