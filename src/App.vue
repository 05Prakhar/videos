<template>
  <ul>
    <li>Books</li>
    <li>Youtube</li>
    <li @click="navigate('AddBook')">Add Book</li>
  </ul>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  methods: {
    navigate(value) {
      this.$router.push({
        name: value,
      });
    },
  },
}
</script>

<style>
* {
  margin: 0;
}
ul {
  padding: 0;
  display: flex;
  height: 25px;
  align-items: center;
  justify-content: space-evenly;
}
ul > li {
  list-style: none;
  cursor: pointer;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
