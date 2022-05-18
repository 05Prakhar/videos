<template>
  <section>
    <input type="text" placeholder="Search By Course" v-model="searchCourse">
    <!-- Filter -->
    <div class="course-container">
      <div
        class="course-card"
        v-for="(course, index) in filteredCourses"
        :key="index"
        @click="openModal(course)"
      >
        <div>{{ course.title }}</div>
      </div>
      <div v-if="isModalOpen" class="course-modal">
        <div class="course-modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <div class="course-modal-container"></div>
        </div>
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
      selectedCourse: {},
      isModalOpen: false,
    };
  },
  computed: {
    filteredCourses() {
      return this.searchCourse !== ""
        ? this.Courses.filter(
            (el) =>
              el.title.toLowerCase().search(this.searchCourse.toLowerCase()) !==
              -1
          )
        : this.Courses;
    },
  },
  methods: {
    openModal(courseDetails) {
      this.selectedCourse = courseDetails;
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
.course-container {
  margin: 20px 15px;
  display: grid;
  grid-gap: 1rem;
}
.course-card {
  border-radius: 10px;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
}

/* The Modal (background) */
.course-modal {
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
.course-modal-content {
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
