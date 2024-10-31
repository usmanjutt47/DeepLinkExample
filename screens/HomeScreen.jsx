import { Button, Text, View } from "react-native";
import * as React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Products"
        onPress={() => navigation.navigate("Products")}
      />
    </View>
  );
}
