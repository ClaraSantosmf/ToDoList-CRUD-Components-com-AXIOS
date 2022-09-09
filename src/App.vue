<template>
  <div id="app">
    <h1>To Do - Controle sua vida</h1>
    <barraProgresso :progresso="progresso"> </barraProgresso>
    <listaDeTasks  
    :tasks="tasks"
    @editarTask="editadoTasks"
    @deletarTask="taskDeletada" 
    @mudandoEstadoTarefa="mudadoEstado" 
    /> 
    <NovaTarefa @AdicionandoTask="taskAdicionada"></NovaTarefa>
  </div>
</template>

<script>
import barraProgresso from './components/barraProgresso.vue'
import listaDeTasks from './components/listaDeTasks.vue'
import NovaTarefa from './components/NovaTarefa.vue'
import T from './TasksAPi.js'

export default {
  components: { listaDeTasks, NovaTarefa, barraProgresso },
  data(){
    return{
      tasks: []
    }
  },
  computed:{
    progresso(){
      let total = this.tasks.length
      let feitas = this.tasks.filter(tas => !tas.pending).length
      return Math.round(feitas/total * 100) || 0
    }
  },
  methods:{
    taskAdicionada(task){
      this.tasks.push({
        title: task.title,
        project: task.project,
        dueTo: task.dueTo,
        pending: "true",
        isShow: task.isShow
      })
      T.postTasks(this.tasks[this.tasks.length -1 ])

    },
    taskDeletada(task){
      this.tasks.splice(this.tasks.indexOf(task), 1);
      T.deleteTasks(task)
    },
    mudadoEstado(task){
      task.pedding = task.pedding == 'false'? 'true': 'false'
      T.petTasks(task);
      },
    editadoTasks(task, newTask){
      this.tasks[this.tasks.indexOf(task)] = newTask
      T.petTasks(task)
    },
  },
  created(){ 
    let self = this 
    function populando(response){
      self.tasks = response
    }
    T.getTasks(populando)
  }
}
</script>

<style>
body{
background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}
</style>
