<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{ content }}</h3>
    </header>
  </div>
</template>
<script>

export default {
  name: "home-component",
  data() {
    return {
      content: "",
    };
  },
  
    mounted() {
        this.content = "Hello World!";
    },
};
</script>