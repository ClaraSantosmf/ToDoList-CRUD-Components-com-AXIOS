# crud_com_componentes

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# ToDoList-CRUD-Components

Preciso relacionar o checkbox a mudança de estado de feito e não feito (FEITO!)
O texto ultrapassa minha div gerada :( 

## Como executei meu projeto

1º Fiz sem API, compreendendo as interações entre as camadas de APPs existentes. Isso me ajudou a treinar tanto sem API como adaptação para AXIOS. 
2º Sem API, tive que acessar os elementos sempre pelo índice. Índice é sempre o elemento após um objeto em um v-for. Então resolvi esse problema com (task, i). Vou chamar de ID no presente momento do desenvolvimento.
3º Quebrei no maior número possível de componentes, inclusive incluindo eventos emitindo de uma cada para outrao. Task envia elemento para ListaDeTasks e assim chega em APP. 
4º Utilizei eventos personalizados a maior parte do tempo $emit https://br.vuejs.org/v2/guide/components-custom-events.html# ToDoList-CRUD-Components-com-AXIOS
