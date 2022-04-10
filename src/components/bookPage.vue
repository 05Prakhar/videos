<template>
  <section>
    <input
      type="text"
      placeholder="Search By Book Title or Author"
      v-model="searchBook"
      @input="onSearch"
    />
    <!-- Filter -->
    <div class="book-container">
      <div
        class="book-card"
        v-for="(book, index) in filteredBooks"
        :key="index"
        @click="openModal(book)"
      >
        <div>{{ book.title }}</div>
        <!-- <div>{{ book.category }}</div> -->
        <div>{{ book.author }}</div>
        <img :src="book.imageURL" :alt="book.title" />
        <!-- <div>{{ book.amazonURL }}</div>
        <div>{{ book.flipkartURL }}</div>
        <div>{{ book.downloadURL }}</div> -->
      </div>
      <div v-if="isModalOpen" class="book-modal">
        <div class="book-modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <div class="book-modal-container"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Books } from "@/data";

export default {
  name: "BookPage",
  data() {
    return {
      Books,
      searchBook: "",
      selectedBook: {},
      isModalOpen: false,
    };
  },
  computed: {
    filteredBooks() {
      return this.searchBook !== ""
        ? this.Books.filter(
            (el) =>
              el.title.toLowerCase().search(this.searchBook.toLowerCase()) !==
              -1
          )
        : this.Books;
    },
  },
  methods: {
    openModal(bookDetails) {
      this.selectedBook = bookDetails;
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
.book-container {
  margin: 20px 15px;
  display: grid;
  grid-gap: 1rem;
}
@media (min-width: 600px) and (max-width: 900px) {
  .book-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 900px) and (max-width: 1200px) {
  .book-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1200px) {
  .book-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
.book-card {
  border-radius: 10px;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
}

/* The Modal (background) */
.book-modal {
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
.book-modal-content {
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
img {
  height: 350px;
}
</style>
