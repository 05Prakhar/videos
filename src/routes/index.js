import { BookPage, YTPage, CoursePage, ArticlePage, AddPage } from '@/components';

const routes = [
	{
		path: '/books',
		name: 'BookPage',
		component: BookPage,
	},
	{
		path: '/yt',
		name: 'YTPage',
		component: YTPage,
	},
	{
		path: '/courses',
		name: 'CoursePage',
		component: CoursePage,
	},
	{
		path: '/articles',
		name: 'ArticlePage',
		component: ArticlePage,
	},
	{
		path: '/add',
		name: 'AddPage',
		component: AddPage,
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/books',
	},
];

export default routes;
