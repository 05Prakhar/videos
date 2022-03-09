<template>
  <section>
    <input
      type="text"
      placeholder="Search By Channel Title"
      v-model="searchYT"
    />
    <div class="yt-container">
      <div class="yt-card" v-for="(book, index) in filteredYT" :key="index">
        <div>{{ book.title }}</div>
        <div>{{ book.link }}</div>
        <div>{{ book.author }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import { YouTube } from "@/data";

export default {
  name: "YTPage",
  data() {
    return {
      YouTube,
      searchYT: "",
    };
  },
  computed: {
    filteredYT() {
      if (this.searchYT !== "") {
        return this.YouTube.filter(
          (el) =>
            el.title.toLowerCase().search(this.searchYT.toLowerCase()) !== -1
        );
      }
      return this.YouTube;
    },
  },
};
</script>

<style scoped>
section {
  width: 100%;
  margin-top: 25px;
  margin-bottom: 50px;
  text-align: center;
  position: absolute;
  left: 5%;
  right: 5%;
}
input::placeholder {
  color: gray;
}
input {
  width: 75%;
  background: #ecf0f3;
  margin: 5px;
  padding: 10px 10px 10px 20px;
  height: 50px;
  font-size: 14px;
  border-radius: 50px;
  border: none;
  box-sizing: border-box;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
}
.yt-container {
  margin: 20px 15px;
  display: grid;
  grid-gap: 1rem;
}
.yt-card {
  border-radius: 10px;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
}
</style>
