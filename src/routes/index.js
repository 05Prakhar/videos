import { BookPage, YTPage, AddBook } from '@/components';

const routes = [
	{
		path: '/book',
		name: 'BookPage',
		component: BookPage,
	},
	{
		path: '/yt',
		name: 'YTPage',
		component: YTPage,
	},
	{
		path: '/add-book',
		name: 'AddBook',
		component: AddBook,
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/book',
	},
];

export default routes;
