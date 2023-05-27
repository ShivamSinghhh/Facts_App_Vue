<template>
  <div style="background-color: lightyellow">
    <Header />
    <div class="container bg-light"><router-view></router-view></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from './components/Header.vue'

export default defineComponent({
  components: { Header },
});
</script>
