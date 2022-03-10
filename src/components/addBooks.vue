<template>
  <section>
    <div class="add-container">
      <input type="text" placeholder="Title" v-model="titleText" />
      <input type="text" placeholder="Author" v-model="authorText" />
      <input type="text" placeholder="Category" v-model="categoryText" />
      <input type="text" placeholder="Image Link" v-model="imageLink" />
      <input type="text" placeholder="Download Link" v-model="downloadLink" />
      <input type="text" placeholder="Amazon Link" v-model="amazonLink" />
      <input type="text" placeholder="Flipkart Link" v-model="flipkartLink" />
      <div class="button-set">
        <button @click="addItem">Add</button>
        <button @click="clearItem">Clear</button>
      </div>
      <button @click="modifyFile">Modify List</button>
    </div>
  </section>
</template>

<script>
import { Courses } from "@/data";

export default {
  name: "AddBook",
  data() {
    return {
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
    addItem() {
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
    clearItem() {
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
      //   .map((el) => ({
      //     title: el.title.trim(),
      //     author: el.author.trim(),
      //     category: el.category,
      //     imageURL: el.imageURL,
      //     amazonURL: el.amazonURL,
      //     flipkartURL: el.flipkartURL,
      //     downloadURL: el.downloadURL,
      //   }))
      //   .sort((a, b) => (a.title > b.title) ? 1 : -1);
      // const noAuthorBK = splitBK.filter((el) => el.author === undefined);
      // const splitBK = bk.sort((a, b) => (a.title > b.title) ? 1 : -1);
      // this.download(JSON.stringify(splitBK), "CourseList.json", "text/plain");
      // this.download(JSON.stringify(noAuthorBK), "bookWithoutAuthor.json", "text/plain");
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 50px;
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
  background: #1da1f2;
  height: 40px;
  border-radius: 20px;
  font-weight: 900;
  box-sizing: border-box;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
}
</style>
