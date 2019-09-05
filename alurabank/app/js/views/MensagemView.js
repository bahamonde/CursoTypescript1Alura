class MensagemView extends View {
    /* -----------------------------------------------------------------------------
    
        //PARTE DE CODIGO DESNECESSARIA COM A CRIACAO DA CLASSE VIEW pois os metodos foram centralizados lá para apenas ser herdado
    private _elemento: Element
    
    constructor(seletor:string){
    
        this._elemento = document.querySelector(seletor);
        
    }
    
    
    update(model:string): void{
        
        this._elemento.innerHTML = this.template(model);
    
    }
    
    */
    template(model) {
        return `<p class="alert-info">${model}</p>`;
    }
}
