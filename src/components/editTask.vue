<template>
  <div class="nova-tarefa">
      <div class="novaTarefaForm">
          <form action="">
        <label for="title">Nova Tarefa</label>
            <input placeholder="Title" id="title" type="text" v-model="title"/>

        <div class="selecaoDeProjeto">
            <label for="project">Escolha o tipo de projeto</label>
            <br>
            <select id="project" v-model="project">
            <option value="" disabled selected
            > Choose your option</option>
            <option value="Estudos">Estudos</option>
            <option value="Financeiro">Financeiro</option>
            <option value="Trabalho">Trabalho</option>
            </select>
            
        </div>

        <div class="selecaoDeData">
            <label for="dueTo">Qual é a data limite?</label><br>
            <input v-model="dueTo" type="date" id="dueTo" data-inputmask="'alias': 'date'"/> <br>
        </div>
        <button id="btnSave" @click.prevent="salvarTask">Save</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
                title: "",
                project: "",
                dueTo: "",
                isShow: false,
                pending: true,
            }
        },
    methods:{
        salvarTask() {
            this.$emit('AdicionandoTask', {title: this.title, project: this.project, dueTo: this.dueTo, isShow: this.isShow, pending: this.pending})
            this.title = ''
        },
    }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.nova-tarefa{
    display: flex;
    justify-content: center;
    align-items: center;
}
.novaTarefaForm{
    display: flex;
}
form{
    font-size: 1.5rem;
    flex-direction: column;
    align-content: center;
    align-items: center;
    margin: 20px;
    padding: 30px;
    display: flex;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
    transition: all 0.2s;
    background: radial-gradient(#76b2fe, #b69efe);
    border-radius: 10px;
} 
input, div, select, button{
    margin-bottom: 4%;
    margin-top: 2%;
    border-radius: 5px;
}
button {
    width: 60%;
    font-size: 1rem;
  background-color: transparent;
  border: 0.2em solid #fff;
  border-radius: 1em;
  line-height: 1;
  padding: 1em;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
}
button:hover, button:focus {
  color: #362cf6;
  outline: 0;
}

input, select{
    color: rgb(0, 0, 0);
    background: #fff;
    font-size: 100%;
}

</style>

<!-- https://codepen.io/ericmahoney/pen/oNLMOYw -->