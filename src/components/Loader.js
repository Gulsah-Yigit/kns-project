import { Stack } from "@react-native-material/core";
import { ActivityIndicator } from "react-native";

const Loader = () => (
  <Stack fill center spacing={4}>
    <ActivityIndicator size="large" color="#FE474C" />
  </Stack>
);

export default Loader;
