# omnistack-week10-backend

## Desenvolvido na Semana OmniStack provida pela Rocketseat (13/01 - 19-01).


O objetivo da aplicação é criar uma plataforma onde se é possível localizar Desenvolvedores próximos a localização do usuário em um raio de 10km baseado em suas tecnologias de desenvolvimento pesquisadas.

O backend consiste em uma API RestFul criada para o consumo da aplicação Web e Mobile, contendo atualização em tempo real via websocket.

## Como usar

Instalar as dependências.

``` npm install ```

A conexão com o banco de dados está via variável de ambiente, então é necessária a criação de um arquivo de configuração de variáveis.

``` Criar um arquivo com o nome de .env. Nela, coloque uma variável com o nome de CONNECTIONSTRING com a conexão ao MongoDB. ```

Usar.

``` node dev ```
