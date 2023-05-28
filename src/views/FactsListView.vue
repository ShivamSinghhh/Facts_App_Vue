<template>
  <div class="list-group">
    <a
      href=""
      class="list-group-item list-group-item-action clickable"
      v-for="(fact, index) in facts"
      :key="index"
      @click="goToFact(index)"
    >
      <div class="row">
        <div class="col-2"><img :src="fact.image" height="40" /></div>
        <div class="col-10 align-self-center">{{ fact.text }}</div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { facts } from "../assets/Facts";
export default defineComponent({
  setup() {
    const router = useRouter();
    const goToFact = (id: number) => {
     // if(){} based on conditions, we can navigate.
      router.push({ path: `/fact/${id}` });  // allows you to dynamically navigate to a route
    };
    return { facts, goToFact };
  },
});
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>
