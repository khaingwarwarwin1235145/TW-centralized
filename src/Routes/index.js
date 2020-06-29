import Login from '../Pages/Login/index';
import MenuPage from '../Pages/Menu/index'
import ChillerPlant from '../Pages/ChillerPlant/index'

export const RouteName = {
 
  routeLoginPage: "Login",

  routeMenuPage: "Menu",
  routeChillerPlantPage: "ChillerPlant"


};

export default {
  routes: {

    [RouteName.routeLoginPage]: { component: Login },
    [RouteName.routeMenuPage]: { component: MenuPage },
    [RouteName.routeChillerPlantPage]: { component: ChillerPlant },
   
  },
  default: RouteName.routeLoginPage,
};
