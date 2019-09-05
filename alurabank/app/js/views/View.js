// O 'abstract' é um modificador do TS para não poder criar instancia dessa classe 
class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}
