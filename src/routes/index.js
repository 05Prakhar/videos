import { BookPage, YTPage, CourseraPage, AddPage } from '@/components';

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
