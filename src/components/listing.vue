<template>
  <div
    v-for="(category, index) in contentList"
    :key="index"
    class="container-list"
  >
    <div>{{ category.header }}</div>
    <div class="slider">
      <div
        v-for="(item, ind) in category.data"
        :key="ind"
        class="list-item"
        @click="videoClicked(category.headerId, item.dataId)"
      >
        <img
          :src="`https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`"
          :alt="item.title"
        />
        <div class="item-details">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-date">Uploaded On: {{ item.uploadDate }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { contentList } from "@/data";

export default {
  name: "Listing",
  data() {
    return {
      contentList,
    };
  },
  methods: {
    videoClicked(header, video) {
      this.$router.push({
        name: "playlist",
        params: { headerId: header, dataId: video },
      });
    },
  },
};
</script>

<style scoped>
/* Hide scrollbar for IE, Edge and Firefox */
.slider {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  display: flex;
  overflow-x: auto;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.slider::-webkit-scrollbar {
  display: none;
}
.container-list {
  padding: 20px 10px;
}
.list-item {
  padding: 0 5px;
}
.item-details {
  text-align: left;
}
</style>
