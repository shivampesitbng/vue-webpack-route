import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import home from './componentsInApp/ComponentsInContent/home.vue' ;
import about from './componentsInApp/ComponentsInContent/about.vue' ;
import partners from './componentsInApp/ComponentsInContent/partners.vue' ;
import contact from './componentsInApp/ComponentsInContent/contact.vue' ;	

Vue.use(VueRouter); //enable Routing

const routes = [
	{path: '/',component :home },	//  1 route is just an js obj  
	{path: '/about',component :about },
	{path: '/partners',component :partners },
	{path: '/contact',component :contact },
];

const router = new VueRouter({  //we pass an obj to this constructor
	routes ,
	mode : 'history' ,  //remove #
});

new Vue({
  el: '#app',
  router , 
  render: h => h(App)
})
