<template>
  <p v-if="loading">Carregando...</p>

  <template v-else>
    <HeaderContent />
    <main>
    </main>
  </template>
</template>

<script lang="ts">
import axios from 'axios';

import { defineComponent } from 'vue';
import HeaderContent from './components/HeaderContent.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderContent,
  },

  data() {
    return {
      loading: false,
    };
  },

  created() {
    this.loading = true;
    axios.get('http://localhost:3000/todos')
      .then((res) => {
        this.$store.commit('storeTodos', res.data);
      })
      .finally(() => {
        this.loading = false;
      });
  },
});
</script>

<style>
* {
  font-family: sans-serif;
  background: #000;
  color: white;
}
</style>
