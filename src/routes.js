import Home from './components/Home'
import Holiday from './components/Holiday'
import Club from './components/Club'
import Person from './components/Person'

//二级路由
//import Contact from './components/about/Contact'
//import Delivery from './components/about/Delivery'
//import History from './components/about/History'
//import OrderingGuide from './components/about/OrderingGuide'

//三级路由
//import Phone from './components/about/contact/Phone'
//import PersonName from './components/about/contact/PersonName'
export const routes = [{
		path: '/',
		name: 'home',
		component: Home
//		components: {
//			default: Home,
//			'orderingGuide': OrderingGuide,
//			'delivery': Delivery,
//			'history': History
//		}
	},
	{
		path: '/Holiday',
		name: 'holiday',
		component: Holiday
	},
	{
		path: '/Club',
		name: 'club',
		component: Club,
//		redirect: '/about/contact',
//		children: [{
//				path: '/about/contact',
//				name: 'contactLink',
//				//默认展示模板redirect
//				redirect: '/personName',
//				component: Contact,
//				children: [{
//					path: '/phone',
//					name: 'phoneNumber',
//					component: Phone
//				}, {
//					path: '/personname',
//					name: 'personName',
//					component: PersonName
//				}]
//			}, {
//				path: '/delivery',
//				name: 'deliveryLink',
//				component: Delivery
//			},
//			{
//				path: '/history',
//				name: 'historyLink',
//				component: History
//			}, {
//				path: '/orderingGuide',
//				name: 'orderingGuideLink',
//				component: OrderingGuide
//			}
//		]
	},
	{
		path: '/Person',
		name: 'person',
		component: Person,
		//路由独享守卫
		//		beforeEnter: (to, from, next) => {
		//			alert('非登录状态，不能访问此页面');
		//			next(false);
		//			if(to.path == '/Login' || to.path == '/Register') {
		//				next();
		//			} else {
		//				alert('您还没登录，请先登录');
		//				next('/Login');
		//			}
		//		}
	},
//	{
//		path: '/Register',
//		name: 'registerlink',
//		component: Register
//	},
//	{
//		path: '/Login',
//		name: 'loginlink',
//		component: Login
//	},
//	{
//		path: '*',
//		redirect: '/'
//	},
]