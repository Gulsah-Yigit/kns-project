import { NavigationContainer } from "@react-navigation/native";

import { GeneralContextProvider } from "./src/context";
import { reducer, initialState } from "./src/context/reducer";

import StackNavigator from "./src/screens/StackNavigator";

const App = () => (
  <GeneralContextProvider reducer={reducer} initialState={initialState}>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  </GeneralContextProvider>
);

export default App;
