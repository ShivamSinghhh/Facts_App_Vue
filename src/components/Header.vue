<template>
    <div class="text-center"><h2 class="bg-dark text-warning">Vue3 Mini Facts Project by Shivam</h2>
    <div class="d-flex justify-content-center">
        <HeaderLink to="/" exact>Home page</HeaderLink>
        <HeaderLink to="/facts" exact>List the facts</HeaderLink>
    </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import HeaderLink from './HeaderLink.vue';
export default defineComponent({
    components:{HeaderLink}
})
</script>