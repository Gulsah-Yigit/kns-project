import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useStateValue } from "../context";

import SearchScreen from "./SearchScreen";
import CardItemsScreen from "./CardItemsScreen";
import Dashboard from "./Dashboard";
import SearchButton from "../components/SearchButton";

import { PATHS, TEXTS } from "../constants";
import { useMemo } from "react";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [{ dataKeys }] = useStateValue();
  const isLoading = useMemo(() => dataKeys.length <= 0, [dataKeys]);

  const commonHeaderProps = {
    headerStyle: {
      backgroundColor: "#FE474C",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };

  return (
    <Stack.Navigator initialRouteName={PATHS.DASHBOARD}>
      <Stack.Screen
        name={PATHS.DASHBOARD}
        component={Dashboard}
        options={({ navigation }) => ({
          ...commonHeaderProps,
          headerTitle: isLoading ? TEXTS.LOADING : TEXTS.CARDS,
          headerRight: isLoading
            ? null
            : () => <SearchButton navigation={navigation} color="#fff" />,
        })}
      />
      <Stack.Screen
        name={PATHS.CARDS}
        component={CardItemsScreen}
        options={({ navigation, route }) => ({
          ...commonHeaderProps,
          headerTitle: route.params.selectedItem,
          headerRight: () => (
            <SearchButton navigation={navigation} color="#fff" />
          ),
        })}
      />
      <Stack.Screen
        name={PATHS.SEARCH}
        component={SearchScreen}
        options={commonHeaderProps}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
