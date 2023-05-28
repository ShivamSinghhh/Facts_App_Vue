<template>
  <div class="card">
    <div class="row">
      <div class="col-auto"><img :src="fact.image" height="200" /></div>
      <div class="col-sm-6 col-md-7 align-self-center">
        <div class="card-body">
          <h4 class="card-title">Cat Fact #{{ factId }}</h4>
          <h5 class="card-text">{{ fact.text }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { facts } from "../assets/Facts";

type FactCardProps = { factId: number };
export default defineComponent({
  props: {
    factId: {
      type: Number,
      required: true,
      validator: (v) => typeof v === "number" && v >= 0 && v < facts.length
    },
  },

  setup(props: FactCardProps) {
    const fact = computed(() => facts[props.factId]);
    return { fact };
  },
});
</script>
