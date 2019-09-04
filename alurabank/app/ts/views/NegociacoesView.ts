class NegociaçoesView { //essa classe que vai ter a apresentacao das informações

    private _elemento:Element;

    constructor(selector:string){
        
        this._elemento = document.querySelector(selector); 
        
    }

    update(model:Negociacoes){    //pega o resultado do metodo template, atribui na propriedade 'innerHTML' e converte em elementos do DOM
        this._elemento.innerHTML = this.template(model);
    }

    template(model:Negociacoes):string{      //define o que eu quero exibir para o usuario. O CODIGO HTML DA TABELA VAI AQUI E NO INDEX VAI APENAS UMA <DIV> COM O ID QUE REFERENCIA A ESSA CLASSE (NO CONTROLLER)

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>


            ${model.paraArray().map(negociacao =>   //'getMonth' sempre vai retornar os meses de 0 a 11 por causa do index. ENTÃO TEM QUE SOMAR +1 
                `
                <tr>
                    <td>${negociacao.data.getDate()}/${negociacao.DATA.getMonth()+1}/${negociacao.DATA.getFullYear()}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                    <td>${negociacao.volume}</td>
                </tr>
                `
            ).join('')} 

            </tbody>

            <tfoot>
            </tfoot>
        </table>              

        `;

        //O 'join('')' vai concatenar todos os dados das strings geradas nos <tr> para uma unica string 
    }
}