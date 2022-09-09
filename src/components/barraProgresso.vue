<template>
    <div class="centralizadora">
  <div class="progresso-tarefas">
    <span class="progress-value">{{progresso}}%</span>
    <div class="barra-de-progresso" :style="{width:progresso + '%'}"> </div>
  </div>
</div>
</template>

<script>
export default {
    props:{
        progresso: {type:Number, default: 0}
    }
}
</script>

<style>
    .centralizadora{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .progresso-tarefas{
        position: relative;
        width: 80%;
        color: #fff;
        border-radius: 15px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .barra-de-progresso{
        position: absolute;
        border-radius: 8px;
        height: 100%;
        background: radial-gradient(#1fe4f5, #3fbafe);
    }
</style>