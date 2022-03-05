<template>
  <section>
    <div class="add-container">
      <input type="text" placeholder="Title" v-model="titleText">
      <input type="text" placeholder="Author" v-model="authorText">
      <input type="text" placeholder="Category" v-model="categoryText">
      <input type="text" placeholder="Image Link" v-model="imageLink">
      <input type="text" placeholder="Book Link" v-model="bookLink">
      <div class="button-set">
        <button @click="addItem">Add</button>
        <button @click="clearItem">Clear</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AddBook',
  data() {
    return {
      titleText: '',
      authorText: '',
      categoryText: '',
      imageLink: '',
      bookLink: '',
    }
  },
  methods: {
    addItem() {
      const payload = {
        title: this.titleText,
        author: this.authorText,
        category: this.categoryText,
        image: this.imageLink,
        link: this.bookLink,
      };
      console.log(payload)
    },
    clearItem() {
      this.titleText = '';
      this.authorText = '';
      this.categoryText = '';
      this.imageLink = '';
      this.bookLink = '';
    },
  },
}
</script>

<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ecf0f3;
  width: 100vw;
  height: 100vh;
}
.add-container {
  border-radius: 20px;
  padding: 20px 40px;
  box-sizing: border-box;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
  width: 500px;
}
input::placeholder {
  color: gray;
}
input {
  width: 100%;
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
.button-set {
  display: flex;
  justify-content: space-evenly;
}
button {
  cursor: pointer;
  width: 40%;
  padding: 0;
  border: none;
  outline: none;
  color: white;
  margin-top: 20px;
  background: #1DA1F2;
  height: 40px;
  border-radius: 20px;
  font-weight: 900;
  box-sizing: border-box;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
}
</style>
