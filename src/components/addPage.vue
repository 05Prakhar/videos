<template>
  <section>
    <div class="tab-view">
      <ul>
        <li
          @click="onTabClick('Book')"
          :class="{ 'active-tab': selectedTab === 'Book' }"
        >
          Add Book
        </li>
        <li
          @click="onTabClick('Youtube')"
          :class="{ 'active-tab': selectedTab === 'Youtube' }"
        >
          Add Youtube Channel
        </li>
        <li
          @click="onTabClick('Coursera')"
          :class="{ 'active-tab': selectedTab === 'Coursera' }"
        >
          Add Coursera Course
        </li>
      </ul>
    </div>
    <div v-if="selectedTab === 'Book'" class="book-add-container">
      <input type="text" placeholder="Title" v-model="titleText" />
      <input type="text" placeholder="Author" v-model="authorText" />
      <input type="text" placeholder="Category" v-model="categoryText" />
      <input type="text" placeholder="Image Link" v-model="imageLink" />
      <input type="text" placeholder="Download Link" v-model="downloadLink" />
      <input type="text" placeholder="Amazon Link" v-model="amazonLink" />
      <input type="text" placeholder="Flipkart Link" v-model="flipkartLink" />
      <div class="button-set">
        <button @click="addBook">Add Book</button>
        <button @click="clearBook">Clear Book</button>
      </div>
    </div>
    <div v-if="selectedTab === 'Youtube'">Youtube Page</div>
    <div v-if="selectedTab === 'Coursera'">Coursera Page</div>
  </section>
</template>

<script>
import { Courses } from "@/data";

export default {
  name: "AddBook",
  data() {
    return {
      selectedTab: "Book",
      titleText: "",
      authorText: "",
      categoryText: "",
      imageLink: "",
      downloadLink: "",
      amazonLink: "",
      flipkartLink: "",
      Courses,
    };
  },
  methods: {
    onTabClick(val) {
      this.selectedTab = val;
    },
    addBook() {
      const payload = {
        title: this.titleText,
        author: this.authorText,
        category: this.categoryText,
        imageURL: this.imageLink,
        downloadURL: this.downloadLink,
        amazonURL: this.amazonLink,
        flipkartURL: this.flipkartLink,
      };
      console.log(payload);
    },
    clearBook() {
      this.titleText = "";
      this.authorText = "";
      this.categoryText = "";
      this.imageLink = "";
      this.bookLink = "";
    },
    modifyFile() {
      // const bk = this.Courses;
      // const splitBK = bk
      //   .map((el) => ({
      //     title: el.title.split(/By|by/).at(0),
      //     author: el.title.split(/By|by/).at(1) || el.author,
      //     category: el.category,
      //     imageURL: el.imageURL,
      //     amazonURL: el.amazonURL,
      //     flipkartURL: el.flipkartURL,
      //     downloadURL: el.downloadURL,
      //   }))
        // console.log(splitBK)
      //   .sort((a, b) => (a.title > b.title) ? 1 : -1);
      // const splitBK = bk.sort((a, b) => (a.title > b.title) ? 1 : -1);
      // this.download(JSON.stringify(splitBK), "CourseList.json", "text/plain");
    },
    download(content, fileName, contentType) {
      const a = document.createElement("a");
      const file = new Blob([content], { type: contentType });
      a.href = URL.createObjectURL(file);
      a.download = fileName;
      a.click();
      a.remove();
    },
  },
};
</script>

<style scoped>
section {
  margin-top: 50px;
  margin-bottom: 50px;
}
.tab-view {
  width: fit-content;
  height: auto;
  margin: 0 auto;
  padding: 30px;
}
.tab-view ul .active-tab {
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
}
.tab-view ul {
  padding: 0;
}
.tab-view ul li {
  display: inline-block;
  padding: 1em 1.5em;
  margin: 1em;
  border-radius: 20px;
  cursor: pointer;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
}
.book-add-container {
  margin: 0 auto;
  padding: 20px 40px;
  border-radius: 20px;
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
  background: #1da1f2;
  height: 40px;
  border-radius: 20px;
  font-weight: 900;
  box-sizing: border-box;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
}
</style>
