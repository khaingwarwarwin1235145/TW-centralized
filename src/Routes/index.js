import Login from '../Pages/Login/index';
import MainMenuContainer from '../Pages/MainPage/container/maincontainer';
import ChillerPlant from '../Pages/ChillerPlant/index'

export const RouteName = {
 
  routeLoginPage: "login",

  routeMainMenuPage: "main",
  routeChillerPlantPage: "ChillerPlant"


};

export default {
  routes: {

    [RouteName.routeLoginPage]: { component: Login },
    [RouteName.routeMainMenuPage]: { component: MainMenuContainer },
    [RouteName.routeChillerPlantPage]: { component: ChillerPlant },
   
  },
  default: RouteName.routeLoginPage,
};
