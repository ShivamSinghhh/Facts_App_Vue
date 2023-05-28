<template>
  <div class="card">
    <div class="card-body text-center">
      <h4>General Knowledge about Cats</h4>
      <button class="btn btn-success" @click="getPosts">Get Posts</button>
      <div v-for="post in posts" :key="post.id">
      <h2 class="bg-warning">{{ post.id }} {{ post.title }}</h2>
      <p>{{ post.body }}</p>
      </div>
      <h5 class="bg-dark text-info text-center">
        Copyright reserved to Dr. DSR Murthy
      </h5>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    const posts = ref([]);
    const getPosts = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          console.log(response.data);
          posts.value = response.data;
        });
    };
    return { posts, getPosts };
  },
});
</script>
