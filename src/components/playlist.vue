<template>
  <template v-if="filteredList && dataId < playlist.length">
    {{ filteredList.header }}
    <button @click="goToListing">Back</button>
    <div
      v-for="(item, index) in playlist"
      :key="index"
    >
      <iframe :src="`https://www.youtube.com/embed/${item.videoId}`" frameborder="0"></iframe>
      <div class="item-details">
        <div class="item-title">Title: {{ item.title }}</div>
        <div class="item-date">Upload Date: {{ item.uploadDate }}</div>
        <div class="item-description">Description: {{ item.description }}</div>
      </div>
    </div>
  </template>
  <template v-else>
    <div>Error</div>
    <button @click="goToListing">Go to Listing Page</button>
  </template>
</template>

<script>
import contentList from '../assets/Content.json';

export default {
  name: 'Playlist',
  data() {
    return {
      contentList,
    }
  },
  props: {
    headerId: {
      type: [Number, String],
      default: 0,
    },
    dataId: {
      type: [Number, String],
      default: 0,
    },
  },
  computed: {
    filteredList() {
      return this.contentList.filter(val => val.headerId.toString() === this.headerId.toString()).at(0);
    },
    playlist() {
      return this.filteredList.data;
    },
  },
  methods: {
    goToListing() {
      this.$router.push({
        name: 'listing',
      });
    },
  },
}
</script>
