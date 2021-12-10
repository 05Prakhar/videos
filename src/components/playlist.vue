<template>
  <div>
    {{ filteredList.header }}
    <div
      v-for="(item, index) in filteredList.data"
      :key="index"
    >
      <!-- <iframe :src="" frameborder="0"></iframe> -->
    </div>
  </div>
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
  },
}
</script>
