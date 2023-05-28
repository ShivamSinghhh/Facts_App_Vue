<template>
  <div style="width: 150px" class="bg-warning">
    <router-link
      :to="to"
      class="nav-link"
      :class="active ? 'bg-info' : null"
    >
      <slot />
    </router-link>
  </div>
</template>

<script lang="ts">
import { computed } from "@vue/reactivity";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  props: {
    to: { type: String, required: true },
    exact: { type: Boolean, default: false },
  },

  setup(props) {
    const route = useRoute();
    const active = computed(() =>
      props.exact ? route.path == props.to : route.path.startsWith(props.to)
    );
    return { active };
  },
});
</script>
