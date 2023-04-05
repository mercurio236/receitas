import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../Pages/home";
import { Detail } from "../Pages/datail";
import { Search } from "../Pages/search";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackNavigation() {
  return (
    <Navigator>
      <Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Screen
        options={{ title: "Detalhes da receita" }}
        name="Detail"
        component={Detail}
      />
      <Screen
        options={{ title: "Veja o que encontramos" }}
        name="Search"
        component={Search}
      />
    </Navigator>
  );
}
