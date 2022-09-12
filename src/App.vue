<template>
  <div id="app">
    <h1>To Do - Controle sua vida</h1>
    <barraProgresso :progresso="progresso"> </barraProgresso>
    <listaDeTasks
      :tasks="tasks"
      @mostrarEdicao="mostrarEdicao"
      @deletarTask="taskDeletada"
      @mudandoEstadoTarefa="mudadoEstado"
      @editarTask="editadoTarefa"
    />
    <NovaTarefa @AdicionandoTask="taskAdicionada"></NovaTarefa>
  </div>
</template>

<script>
import barraProgresso from "./components/barraProgresso.vue"
import listaDeTasks from "./components/listaDeTasks.vue"
import NovaTarefa from "./components/NovaTarefa.vue"
import T from "./TasksAPi.js"

export default {
  components: { listaDeTasks, NovaTarefa, barraProgresso },
  data() {
    return {
      tasks: [],
    }
  },
  computed: {
    progresso() {
      let total = this.tasks.length
      let feitas = this.tasks.filter((tas) => !tas.pending).length
      return Math.round((feitas / total) * 100) || 0
    },
  },
  methods: {
    taskAdicionada(task) {
      // t = post(task)
      // tasks = tasks.push(t) -- esse t ja tem um id
      T.postTasks({ ...task, pending: true })
      T.getTasks((r) => (this.tasks = r))
    },
    taskDeletada(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1)
      T.deleteTasks(task)
    },
    mudadoEstado(task) {
      task.pending = !task.pending
      T.petTasks(task)
    },
    mostrarEdicao(task) {
      task.isShow = !task.isShow
      T.petTasks(task)
    },
    editadoTarefa(task) {
      console.log(task)
      T.petTasks(task)
      T.getTasks((r) => (this.tasks = r))
    },
  },
  created() {
    const populando = (response) => {
      console.log(response)
      console.log(this)
      this.tasks = response
    }
    T.getTasks(populando)
  },
}
</script>

<style>
body {
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
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
