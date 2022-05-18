import { BookPage, YTPage, CoursePage, ArticlePage, SuggestionsPage, AddPage } from '@/pages';

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
		path: '/suggestions',
		name: 'SuggestionsPage',
		component: SuggestionsPage,
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
