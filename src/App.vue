<script lang="ts">
import { defineComponent } from 'vue';
import MapComponent from '@/components/MapComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'

export default defineComponent({
  name: 'ComponentName',
  components: {
    HeaderComponent,
    MapComponent
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
  <main class="wrapper w-full flex items-center justify-center h-full">
    <HeaderComponent class="fixed top-0 left-0 right-0 z-999" />
    <!-- <h1 class="h1 text-center">
      <span class="block">Real World Mapgenie</span>
      <span class="block">🚧 is 🚧</span>
      <span class="block">working in progress</span>
    </h1> -->
    <MapComponent />
  </main>
</template>

<style lang="scss">
@import "@/styles/main";
</style>

<style lang="scss" scoped>
// 
.wrapper {
  height: 100svh;
}
</style>