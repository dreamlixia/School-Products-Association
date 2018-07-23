import Vue from 'vue'
import Router from 'vue-router'
//定义路由
//引入路由
import Home from '@/components/home/index.vue'
import Allgoods from '@/components/allgoods/index.vue'
import Cart from '@/components/cart/index.vue'
import Mall from '@/components/mall/index.vue'
import User from '@/components/user/index.vue'
import Register from '@/components/register/index.vue'


//import HomeHeader from '@/components/home/header/index.vue'
import MainFooter from '@/components/mainfooter/index.vue'


Vue.use(Router)

//定义路由规则
const routes = [
	{
		path: '/',
		components: {
			content: Home,
			footer: MainFooter
		}
	},
	{
		path: '/home',
		components: {
			content: Home,
			footer: MainFooter
		}
	},
	{
		path: '/allgoods',
		components: {
			content: Allgoods,
			footer: MainFooter
		}
	},
	{
		path: '/cart',
		components: {
			content: Cart,
			footer: MainFooter
		}
	},
	{
		path: '/mall',
		components: {
			content: Mall,
			footer: MainFooter
		}
	},
	{
		path: '/user',
		components: {
			content: User,
			footer: MainFooter
		}
	},
	{
		path: '/register',
		components: {
			content: Register,
			footer: MainFooter
		}
	}
]
//创建路由实例
const router = new Router({
	routes
})
//暴露路由实例
export default router
//在入口文件处main.js中引入，挂载在根实例中，整个应用就可以访问路由。

//跳转路由设置，footer/index.vue
//<router-view></router-view>
