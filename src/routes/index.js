import { BookPage, YTPage, CourseraPage, ArticlePage, AddPage } from '@/components';

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
		name: 'CourseraPage',
		component: CourseraPage,
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
