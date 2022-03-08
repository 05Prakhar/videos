<template>
  <section>
    <input
      type="text"
      placeholder="Search By Book Title or Author"
      v-model="searchBook"
      @input="onSearch"
    />
    <div class="book-container">
      <div
        class="book-card"
        v-for="(book, index) in filteredBooks"
        :key="index"
      >
        <div>{{ book.title }}</div>
        <!-- <div>{{ book.category }}</div>
        <div>{{ book.author }}</div>
        <div>{{ book.imageURL }}</div>
        <div>{{ book.amazonURL }}</div>
        <div>{{ book.flipkartURL }}</div>
        <div>{{ book.downloadURL }}</div> -->
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
    };
  },
  computed: {
    filteredBooks() {
      if (this.searchBook !== "") {
        return this.Books.filter((el) => el.title == this.searchBook);
      }
      return this.Books;
    },
  },
};
</script>

<style scoped>
section {
  margin-top: 100px;
  margin-bottom: 50px;
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
  max-width: 1200px;
  margin: 20px 15px;
  display: grid;
  grid-gap: 1rem;
}
@media (min-width: 600px) and (max-width: 900px) {
  .book-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 900px) {
  .book-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
.book-card {
  border-radius: 10px;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
}
</style>
