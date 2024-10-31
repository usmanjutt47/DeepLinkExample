import { Text, View } from "react-native";

export default function ProductDetailsScreen({ route }) {
  const { productId, productName } = route.params || {};
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Product Details Screen</Text>
      <Text>Product ID: {productId}</Text>
      <Text>Product Name: {productName}</Text>
    </View>
  );
}
