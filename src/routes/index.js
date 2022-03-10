import { BookPage, YTPage, CourseraPage, AddBook } from '@/components';

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
		path: '/add-book',
		name: 'AddBook',
		component: AddBook,
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/books',
	},
];

export default routes;
