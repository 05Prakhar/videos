import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import routes from './routes';
import { createStore } from 'vuex';
import state from './state';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
	routes,
});

const store = createStore(state);

createApp(App).use(router, store).mount('#app')
