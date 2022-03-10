<template>
  <div class="header-container">
    <ul>
      <li @click="navigate('BookPage')">Books</li>
      <li @click="navigate('YTPage')">Youtube</li>
      <li @click="navigate('CourseraPage')">Coursera</li>
      <li @click="navigate('AddBook')">Add Book</li>
    </ul>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  methods: {
    navigate(value) {
      this.$router.push({
        name: value,
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
}
body {
  background: #ecf0f3;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header-container {
  color: white;
  padding: 32px;
  background-color: #232931;
  box-shadow: -2px -2px 8px 1px rgba(161, 161, 201, 0.2), 2px 2px 8px 1px rgba(0, 0, 0, 0.8);
  margin: 30px 35px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-radius: 5px;
}
ul {
  padding: 0;
}
li {
  display: inline-block;
  margin-right: 2em;
  padding: 1em 1.5em;
  box-shadow: -2px -2px 8px 1px rgba(161, 161, 201, 0.2), 2px 2px 8px 1px rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  cursor: pointer;
  /* @include sm {
    display: none;
    margin-right: 0;
  }
  &.mobile {
    display: none;
    @include sm {
      display: inline-block;
    }
  }
  &:hover,
  &.active {
    background-color: #f73859;
    box-shadow: 2px 2px 8px 1px rgba(74, 24, 2, 0.8),
      inset -1px -1px 5px 1px rgba(255, 255, 255, 0.2),
      inset 2px 2px 8px 1px rgba(74, 24, 2, 0.8);
  } */
}
</style>
