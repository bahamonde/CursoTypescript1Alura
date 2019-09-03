const controller = new NegociacaoController();
document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller)); //Mantem a associação do this do adiciona com a contante controller
