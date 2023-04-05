import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StackNavigation } from "./stackRoutes";
import { Favorites } from "../Pages/favorites";
import { Ionicons } from "@expo/vector-icons";

const { Screen, Navigator } = createBottomTabNavigator();

const Routes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true, //tab bar vai se esconder quando o usuário for digitar
        tabBarShowLabel: false, //os labels do icones na tab vão ficar ocultos
        tabBarActiveTintColor: "#121212", // aqui muda a cor dos botões da tab quando vai clicar

        tabBarStyle: {
          backgroundColor: "#FFF", //cor da tab
          borderTopWidth: 0, //remove a linha do topo
        },
      }}
    >
      <Screen
        name="HomeTab"
        component={StackNavigation}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" color="#000" size={size} />;
            }
            return <Ionicons name="home-outline" color={color} size={size} />;
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="heart" color="#FF4141" size={size} />;
            }
            return <Ionicons name="heart-outline" color={color} size={size} />;
          },
        }}
      />
    </Navigator>
  );
};

export default Routes;
