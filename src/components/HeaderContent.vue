<template>
  <header>
    <h1>Lista de Tarefas</h1>
    <h2>Quantidade de tarefas completas {{completedTasks}} - {{tasksQuantity}} </h2>
  </header>
</template>

<script lang="ts">
import TodoInterface from '@/interfaces/TodoInterfaces';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderContent',

  data() {
    return {
      completedTasks: 0,
      tasksQuantity: 0,
    };
  },

  created() {
    this.completedTasks = this.$store.state.todos
      .filter(({ inProgress }: TodoInterface) => inProgress === false).length;
    this.tasksQuantity = this.$store.state.todos.length;
  },
});
</script>

<style scoped>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: 100%;
    height: 10vh;
  }

  h1 {
    width: 25vw;
    margin: 1rem;
    text-align: center;
    font-size: xx-large;
    border-radius: 55px;
  }

  @media only screen and (max-width: 768px) {
    header  {
      padding: 2.5rem;
      height: auto;
    }
  }
</style>
