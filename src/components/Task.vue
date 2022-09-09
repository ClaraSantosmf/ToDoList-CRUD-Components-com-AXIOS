<template>
     <div class="task" :class="estadoDaClasse">
        <strong v-if="done">🍪 Tarefa Realizada!!</strong>
        <div class="card__icon"><i class="fas fa-bolt"></i></div>
        <p class="card__date">{{task.dueTo}}<i class="fas fa-times"></i></p>
        <a href="#" class="card__exit" @click="$emit('deletarTask', task)"> Deletar </a>
        <h2 class="card__title">{{task.title}}</h2>
        <p class="card__apply"> {{task.project}}</p>
        
        <a href="#" class="card__exit"> Editar Tarefa </a>

        <input type="checkbox" v-model="done" class="done" @change="$emit('mudandoEstadoTarefa', task)">
        <br>
    </div>

</template>


<script>
export default {
    props: {
        task: {type: Object, required:true }
    },
    data(){
    return{
      done:''
    }
  },
    computed: {
        estadoDaClasse(){
              let classe = this.task.pedding == "true"?  "pendente": "feito"
              return classe;     
        }
    }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.main-container {
  padding: 30px;
}

/* HEADING */

.heading {
  text-align: center;
}

.heading__title {
  font-weight: 600;
}


.heading__link {
  text-decoration: none;
}

.heading__credits .heading__link {
  color: inherit;
}

/* CARDS */

.task {
  position: relative;
  margin: 20px;
  padding: 20px;
  width: 500px;
  min-height: 200px;
  display: grid;
  grid-template-rows: 20px 50px 1fr 50px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
}

.card:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.01);
}

.card__link,
.card__exit,
.card__icon {
  position: relative;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
}

.card__link::after {
  position: absolute;
  top: 25px;
  left: 0;
  content: "";
  width: 0%;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.6);
  transition: all 0.5s;
}

.card__link:hover::after {
  width: 100%;
}

.card__exit {
  grid-row: 1/2;
  justify-self: end;
}

.card__date {
  grid-row: 1/2;
  justify-self: start;
}

.card__icon {
  grid-row: 2/3;
  font-size: 30px;
}

.card__title {
  grid-row: 3/4;
  font-weight: 400;
  color: #ffffff;
}

.card__apply {
  grid-row: 4/5;
  align-self: center;
}

.done{
  position: absolute;
  right: 15px;
  bottom: 5px;
}

/* CARD BACKGROUNDS */

.pendente {
  background: radial-gradient(#fbc1cc, #fa99b2);;
}

.feito {
  background: radial-gradient(#60efbc, #58d5c9);
}

/* RESPONSIVE */

@media (max-width: 1600px) {
  .cards {
    justify-content: center;
  }
}

</style>