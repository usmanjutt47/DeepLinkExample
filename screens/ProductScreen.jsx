import React from "react";
import { Button, Text, View } from "react-native";

export default function ProductScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Product List</Text>
      <Button
        title="Go to Product Details"
        onPress={() =>
          navigation.navigate("ProductDetails", {
            productId: "42",
            productName: "Laptop",
          })
        }
      />
    </View>
  );
}
