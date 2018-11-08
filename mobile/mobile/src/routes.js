import { createStackNavigator } from "react-navigation"; // importa um tipo de navegação que tem em aplicação mobile ( click/botão )
// import { createTabNavigator } from 'react-navigation para navegação em abas

import Login from "./pages/Login";
import Timeline from "./pages/Timeline";
import New from "./pages/New";

const Routes = createStackNavigator({
  Login,
  Timeline,
  New
});

export default Routes;
