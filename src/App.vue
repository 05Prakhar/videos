<template>
  <div class="header-container">
    <ul>
      <li
        :class="{ 'active-header': selectedHeader === 'BookPage' }"
        @click="navigate('BookPage')"
      >
        Books
      </li>
      <li
        :class="{ 'active-header': selectedHeader === 'YTPage' }"
        @click="navigate('YTPage')"
      >
        Youtube
      </li>
      <li
        :class="{ 'active-header': selectedHeader === 'CoursePage' }"
        @click="navigate('CoursePage')"
      >
        Courses
      </li>
      <li
        :class="{ 'active-header': selectedHeader === 'ArticlePage' }"
        @click="navigate('ArticlePage')"
      >
        Articles
      </li>
      <li>Web3</li>
      <li
        :class="{ 'active-header': selectedHeader === 'SuggestionsPage' }"
        @click="navigate('SuggestionsPage')"
      >
        Suggestions
      </li>
      <li
        :class="{ 'active-header': selectedHeader === 'AddPage' }"
        @click="navigate('AddPage')"
      >
        Add
      </li>
    </ul>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selectedHeader: '',
    };
  },
  async mounted() {
    await this.$router.isReady();
    this.selectedHeader = this.$router.currentRoute.value.name;
  },
  methods: {
    navigate(value) {
      this.selectedHeader = value;
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
  box-shadow: -2px -2px 8px 1px rgba(161, 161, 201, 0.2),
    2px 2px 8px 1px rgba(0, 0, 0, 0.8);
  margin: 30px 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
  position: sticky;
  top: 0;
}
.header-container ul {
  padding: 0;
  list-style-type: none;
}
.header-container ul .active-header {
  box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.2),
    inset -2px -2px 8px 1px rgba(161, 161, 201, 0.2),
    inset 2px 2px 8px 1px rgba(0, 0, 0, 0.8);
}
.header-container ul li {
  display: inline-block;
  margin-right: 2em;
  margin-bottom: 1em;
  padding: 1em 1.5em;
  box-shadow: -2px -2px 8px 1px rgba(161, 161, 201, 0.2),
    2px 2px 8px 1px rgba(0, 0, 0, 0.8);
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
@media (max-width: 500px) {
  .header-container ul li {
    display: list-item;
    margin-right: 0;
  }
}
</style>
