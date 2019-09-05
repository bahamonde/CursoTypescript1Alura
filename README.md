# CursoTypescript1Alura
Aula 'TypeScript parte 1: Evoluindo seu Javascript' do professor Flavio Almeida da  formação Angular do Alura.

-----------------------------------------------------------------------------------------------------------------------------

-  'package.json' = é o local onde as dependências baixadas ficam listadas. 
*Para criar esse aquivo:*
entra na pasta pai('antes da app') pelo terminal, digita 'npm init' aperte a tecla 'enter' até acabar as opções (inclusive na pergunta onde deve responder 'sim')

-  Também é preciso instalar o arquivo e compilador de TS 'tsc' 
*Para criar esse arquivo:*
No mesmo diretório anterior pelo terminal digita 'npm install typescript@2.3.2 --save-dev' (pode ser outra versao mais atual)

-  Para compilar digita 'npm rum compile' (onde 'compile' é o nome que você deu para chamar o compilador tsc no arquivo 'package.json' Ao fazer esse processo o TS cria uma cópia em Javascript de todo diretório que está em TypeScript. Isso é necessário porque o browser roda JS.

-  Para não precisar compilar a cada mudança no TS e deixar o compilador rodando sem parar (travado): 
Digite o comando Json [ "start":"tsc -w" ] no 'package.json' 
No terminal no ainda na pasta pai digita 'npm start'

-  O não é devidamente suportado pelo Firefox e pelo Edge. 
*Para funcionar no Firefox:*
Digite no endereço 'about:config' 
Procura por 'dom.forms.datetime' 
E clica 2 vezes para mudar o valor para 'true' 
*Para funcionar no Edge:*
Não vai aceitar data no forms da data com '-' como em (12-05-2018). Por isso usamos o a funcao "this._inputData.value.replace(/-/g, '/'))" no TS para substituir os hifens por barras. Assim fica (12/05/2018)

-  O Jquery é uma biblioteca de mais de 10 anos e não existia TS, assim o Jquery não reconhece o TS. 
TSD (TypeScript Definition) é uma biblioteca que mapeia as funcoes do Jquery para ter a opçao de auto complete das funcoes Jquery no arquivo TS. Para isso:
Entra no terminal e acessa o diretorio que tem a aplicação
Digita'npm install @types/jquery@2.0.42 --save-dev'  (tem que sempre procurar no Google qual a versão mais atual)
Esse processo cria na pasta 'node_modules' uma pasta '@types' que contem um arquivo 'index.d.ts' que mapeia os tipos para cada funcao do Jquery (as vezes o code não mostra. Tem que reabrir o projeto)
