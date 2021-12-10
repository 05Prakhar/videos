<template>
  <template v-if="filteredList && dataId < playlist.length">
    {{ filteredList.header }}
    <div
      v-for="(item, index) in filteredList.data"
      :key="index"
    >
      <!-- <iframe :src="" frameborder="0"></iframe> -->
    </div>
    {{playlist}}
  </template>
  <template v-else>
    <div>Error</div>
    <button @click="navToListing"> Go to Listing Page</button>
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
      return this.contentList.filter(val => val.headerId.toString() === this.headerId.toString())[0];
    },
    playlist() {
      return this.filteredList.data;
    },
  },
  methods: {
    navToListing() {
      this.$router.push({
        name: 'listing',
      });
    },
  },
}
</script>
