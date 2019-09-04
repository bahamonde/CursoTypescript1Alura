class NegociaçoesView {
    constructor(selector) {
        this._elemento = document.querySelector(selector);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
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


            ${model.paraArray().map(negociacao => `
                <tr>
                    <td>${negociacao.data.getDate()}/${negociacao.DATA.getMonth() + 1}/${negociacao.DATA.getFullYear()}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                    <td>${negociacao.volume}</td>
                </tr>
                `).join('')} 

            </tbody>

            <tfoot>
            </tfoot>
        </table>              

        `;
        //O 'join('')' vai concatenar todos os dados das strings geradas nos <tr> para uma unica string 
    }
}
