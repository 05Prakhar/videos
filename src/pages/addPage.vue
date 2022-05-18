<template>
  <section>
    <button @click="modifyFile">Scrap Page</button>
  </section>
</template>

<script>
import { Books, Courses, YouTube } from "@/data";
import axios from "axios";
// import cheerio from "cheerio";

export default {
  name: "AddPage",
  data() {
    return {
      Books,
      Courses,
      YouTube,
    };
  },
  methods: {
    modifyFile() {
      // this.download(JSON.stringify(splitBK), "CourseList.json", "text/plain");
      this.Books.forEach(async element => {
        axios.get("https://www.amazon.in/s?k=" + this.splitName(element.title), {
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          }
        })
        .then(response => {
          console.log(response.data);
        });
      });
    },
    download(content, fileName, contentType) {
      const a = document.createElement("a");
      const file = new Blob([content], { type: contentType });
      a.href = URL.createObjectURL(file);
      a.download = fileName;
      a.click();
      a.remove();
    },
    splitName (name) {
      return name.split(" ").join("+");
    },
  },
};
</script>

<style scoped>
section {
  margin-top: 50px;
  margin-bottom: 50px;
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
