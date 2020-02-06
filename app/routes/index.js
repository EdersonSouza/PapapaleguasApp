import Login from "../components/Login";
import Home from "../components/Home";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
Vue.use(RadSideDrawer);

const routes = {
    login: Login,
    home: Home 
}
export default routes;