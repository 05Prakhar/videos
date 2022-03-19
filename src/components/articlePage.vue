<template>
  <section>
    <input type="text" placeholder="Search By Article" v-model="searchArticle" />
    <!-- Filter -->
    <div class="article-container">
      <div
        class="article-card"
        v-for="(article, index) in filteredArticles"
        :key="index"
        @click="openModal(article)"
      >
        <div>{{ article.title }}</div>
      </div>
      <div v-if="isModalOpen" class="article-modal">
        <div class="article-modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <div class="article-modal-container"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Courses } from "@/data";

export default {
  name: "ArticlePage",
  data() {
    return {
      Courses,
      searchArticle: "",
      selectedArticle: {},
      isModalOpen: false,
    };
  },
  computed: {
    filteredArticles() {
      return this.searchArticle !== ""
        ? this.Courses.filter(
            (el) =>
              el.title.toLowerCase().search(this.searchArticle.toLowerCase()) !==
              -1
          )
        : this.Courses;
    },
  },
  methods: {
    openModal(articleDetails) {
      this.selectedArticle = articleDetails;
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
  margin: 25px auto 50px auto;
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
}
.article-container {
  margin: 20px 15px;
  display: grid;
  grid-gap: 1rem;
}
.article-card {
  border-radius: 10px;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
}

/* The Modal (background) */
.article-modal {
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
.article-modal-content {
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
