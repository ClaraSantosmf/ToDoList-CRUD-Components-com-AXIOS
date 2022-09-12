<template>
  <div class="lista-de-tasks">
    <template v-if="tasks.length">
      <Task
        v-for="task in tasks"
        :key="task.id"
        @deletarTask="dlt"
        @mudandoEstadoTarefa="ft"
        :task="task"
        @mostrarEdicao="tsk"
        @editarTask="(taskrecebida) => $emit('editarTask', taskrecebida)"
      ></Task>
    </template>
    <p v-else class="sem-tarefas">Tire uma folga! Sem tarefas</p>
  </div>
</template>

<script>
import Task from "./Task.vue"

export default {
  components: { Task },
  props: {
    tasks: { type: Array, required: true },
  },
  methods: {
    ft(task) {
      this.$emit("mudandoEstadoTarefa", task)
    },
    tsk(task) {
      this.$emit("mostrarEdicao", task)
    },
    dlt(task) {
      this.$emit("deletarTask", task)
    },
  },
}
</script>

<style>
.lista-de-tasks {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
