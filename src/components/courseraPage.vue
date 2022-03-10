<template>
  <section>
    <input type="text" placeholder="Search By Course" v-model="searchCourse" />
    <!-- Filter -->
    <div class="course-container">
      <div
        class="course-card"
        v-for="(course, index) in filteredCourses"
        :key="index"
      >
        <div>{{ course.title }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import { Courses } from "@/data";

export default {
  name: "CourseraPage",
  data() {
    return {
      Courses,
      searchCourse: "",
    };
  },
  computed: {
    filteredCourses() {
      if (this.searchCourse !== "") {
        return this.Courses.filter(
          (el) =>
            el.title.toLowerCase().search(this.searchCourse.toLowerCase()) !==
            -1
        );
      }
      return this.Courses;
    },
  },
};
</script>

<style scoped>
section {
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
.course-container {
  margin: 20px 15px;
  display: grid;
  grid-gap: 1rem;
}
.course-card {
  border-radius: 10px;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
}
</style>
