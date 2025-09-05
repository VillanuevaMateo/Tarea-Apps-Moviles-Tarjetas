import { Text, View } from "react-native";
import { ClickFunction } from "../components/contador";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ClickFunction />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
