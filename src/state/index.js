import axios from "axios"

export default {
  state: {
    allBooks: {},
    allChannels: {},
  },
  mutations: {
    SET_BOOKS(bks) {
      state.allBooks = bks;
    },
    SET_CHANNELS(chnls) {
      state.allChannels = chnls;
    },
  },
  actions: {
    async fetchAllBooks({ commit }) {
      let books = await axios.get();
      commit(SET_BOOKS, books);
    },
    async fetchAllChannels({ commit }) {
      let chnls = await axios.get();
      commit(SET_CHANNELS, chnls);
    },
  },
  getters: {
    getAllBooks() {
      return state.allBooks;
    },
    getAllChannels() {
      return state.allChannels;
    },
  },
}
