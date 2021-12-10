import Listing from '../components/listing.vue';
import Playlist from '../components/playlist.vue';

const routes = [
	{
		path: '/',
    name: 'listing',
		component: Listing,
	},
	{
		path: '/:headerId/playlist/:dataId',
		name: 'playlist',
		component: Playlist,
		props: true,
	},
];

export default routes;
