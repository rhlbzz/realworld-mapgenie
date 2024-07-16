<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderComponent',
  components: {
    //
  },
  props: {
    //
  },
  setup () {
    //
    return {
      //
    }
  }
})
</script>

<template>
  <header class="header flex items-center justify-center">
    <h1 class="h1 title">Realworld Mapgenie</h1>
  </header>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@import "@/styles/main";

.header {
  background-color: $c-gray;
}

.title {
  padding: 0.25vh;
}
</style>