const controller = new NegociacaoController();
$('form').submit(controller.adiciona.bind(controller));
/* ---------------- bloco de codigo que só precisa se não usar jquery -------------
.querySelector('.form')
.addEventListener('submit', controller.adiciona.bind(controller));  //Mantem a associação do this do adiciona com a contante controller
*/ 
