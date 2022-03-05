import { HomePage, AddBook } from '@/components';

const routes = [
	// {
	// 	path: '/',
  //   name: 'listing',
	// 	component: Listing,
	// },
	// {
	// 	path: '/:headerId/playlist/:dataId',
	// 	name: 'playlist',
	// 	component: Playlist,
	// 	props: true,
	// },
	{
		path: '/',
		name: 'home',
		component: HomePage,
	},
	{
		path: '/add-book',
		name: 'AddBook',
		component: AddBook,
	},
];

export default routes;
