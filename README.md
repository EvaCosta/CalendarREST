# CalendarREST
"CalendarREST" é um projeto de API REST para registro de calendários e eventos, desenvolvido em Node.js.

Esta é uma API RESTful desenvolvida em Node.js que permite registrar calendários e eventos. Cada calendário pode ter vários eventos associados, que são compostos por um nome, uma categoria e uma data. As categorias previstas para os eventos são NORMAL, WARNING e CRITICAL.

Além dos endpoints de criação, edição e deleção de eventos, a API conta também com um endpoint que retorna todos os eventos do dia.

## Instalação

Para começar, é necessário ter o Node.js instalado em sua máquina. Você pode baixá-lo a partir do site oficial: https://nodejs.org/

Em seguida, abra um terminal e navegue até a pasta onde deseja clonar o projeto.

Execute o comando abaixo para instalar as dependências necessárias do projeto.

```text
# npm install
```


Execute o comando abaixo para startar o projeto:

## Rodando o projeto:

```text
# npm run start
```

## Testes
Para gerar o relatório de coverage. digite:
npm run star

```text
# npm run test:coverage
```

Para rodar os testes unitarios, digite:

```text
# npm run test
```
 
Considerando o contexto de negócio no qual esta API será utilizada, de que outra forma podemos utilizá-la para que torne a vida dos operadores ainda mais simples na hora de coordenar os ambientes de produção?

Além de utilizar o serviço de calendário para prever demandas de alta carga, também é possível utilizá-lo para coordenar ambientes de produção de forma mais eficiente. Uma possível solução seria utilizar o calendário para agendar manutenções preventivas em determinados horários, evitando que o sistema fique sobrecarregado em momentos críticos.

Além disso, o serviço de calendário também pode ser utilizado para agendar testes de carga em horários programados, permitindo que o time de engenharia avalie o desempenho do sistema em diferentes situações e antecipe possíveis problemas. Com essa abordagem, é possível mitigar os riscos associados à sobrecarga e garantir que o sistema esteja sempre preparado para suportar a demanda dos usuários.
