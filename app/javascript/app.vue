<template>
  <div id="app">
    <div class="row">
      
      <div v-for="list in original_lists" class="col-3">
        <h6>{{ list.name }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  },
  props: ["original_lists"]
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
