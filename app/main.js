import Vue from 'nativescript-vue'
import App from './components/App'
import Login from './components/Login'


import VueDevtools from 'nativescript-vue-devtools'
import DrawerContent from "./components/DrawerContent";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
Vue.use(RadSideDrawer);

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
  
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  
  render: h => h('frame', App, [
    h(Login),
    h(DrawerContent, { slot: 'drawerContent' }),
  ])
}).$start()
