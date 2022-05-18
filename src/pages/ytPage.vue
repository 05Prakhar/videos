<template>
  <section>
    <input
      type="text"
      placeholder="Search By Channel Title"
      v-model="searchYT"
    >
    <div class="yt-container">
      <div
        class="yt-card"
        v-for="(yt, index) in filteredYT"
        :key="index"
        @click="openModal(yt)"
      >
        <img :src="`https://yt3.ggpht.com/${yt.link}`" :alt="yt.title" />
        <div>{{ yt.title }}</div>
      </div>
      <div v-if="isModalOpen" class="yt-modal">
        <div class="yt-modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <div class="yt-modal-container"></div>
        </div>
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
      selectedYT: {},
      isModalOpen: false,
    };
  },
  computed: {
    filteredYT() {
      return this.searchYT !== ""
        ? this.YouTube.filter(
            (el) =>
              el.title.toLowerCase().search(this.searchYT.toLowerCase()) !== -1
          )
        : this.YouTube;
    },
  },
  methods: {
    openModal(ytDetails) {
      this.selectedYT = ytDetails;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style scoped>
section {
  text-align: center;
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
  position: sticky;
  top: 150px;
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

/* The Modal (background) */
.yt-modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
/* Modal Content */
.yt-modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
