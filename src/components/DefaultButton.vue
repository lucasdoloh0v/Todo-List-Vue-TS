<template>
  <button>
    {{buttonName}}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DefaultButton',

  props: {
    buttonName: String,
  },
});
</script>

<style scoped>
</style>
