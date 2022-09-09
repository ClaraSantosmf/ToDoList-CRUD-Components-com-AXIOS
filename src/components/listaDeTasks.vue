<template>
  <div class="lista-de-tasks">
    <template v-if="tasks.length">
      <Task v-for="task in tasks" :key="task.title" @deletarTask="dlt"
      @mudandoEstadoTarefa="ft" :task="task"
      @editarTask="(tasksE) => {this.$emit('editarTask',tasksE)}"></Task>
    </template>
    <p v-else class="sem-tarefas">Tire uma folga! Sem tarefas</p>
  </div>
</template>

<script>

import Task from './Task.vue'

export default {
  components: {Task},
    props:{
        tasks: { type: Array, required: true }
    },
    methods:{
      ft(task){
        this.$emit('mudandoEstadoTarefa', task)
      },
      dlt(task){
        this.$emit('deletarTask', task)
      }
    }
}
</script>

<style>
.lista-de-tasks{
  display: flex;
  justify-content: center;
}
</style>
