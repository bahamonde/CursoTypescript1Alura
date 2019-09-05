/* --------------Essa parte não é preciso se instalar o tds di jQUERY----------------
declare var $: any;  //Essa var é declarada para que possa se usar funçoes do Jquery no projeto. Isso é importante pq androids mais antigos tem incompatibilidade com TS.
*/
// O 'abstract' é um modificador do TS para não poder criar instancia dessa classe 
class View {
    constructor(seletor) {
        this._elemento = $(seletor);
    }
    update(model) {
        this._elemento.html(this.template(model)); //Jquery não tem a funcao 'innerHTML' recebendo o codigo como parametro
    }
}
