<template>
  <div>
    <div v-for="(category, index) in contentList" :key="index">
      <div>{{ category.header }}</div>
      <div v-for="(item, ind) in category.data" :key="ind">
        <img
          :src="`https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`"
          :alt="item.title"
        >
        Title: {{ item.title }}
        Description: {{ item.description }}
        Date: {{ item.uploadDate }}
      </div>
    </div>
  </div>
</template>

<script>
import contentList from '../assets/Content.json';

export default {
  name: 'Listing',
  data() {
    return {
      contentList,
    }
  },
}
</script>
