import { Button, Text, View } from "react-native";
import * as React from "react";
import WebView from "react-native-webview";

export default function WebView({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://www.npmjs.com/package/react-native-webview" }}
        style={{ flex: 1 }}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}
