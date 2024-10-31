import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";

const MainStack = createStackNavigator();
const ProductStack = createStackNavigator();

function ProductStackScreen() {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen name="ProductList" component={ProductScreen} />
      <ProductStack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
    </ProductStack.Navigator>
  );
}

const linking = {
  prefixes: ["mydeeplinkapp://"],
  config: {
    screens: {
      Home: "home",
      Products: "products",
      ProductList: "products",
      ProductDetails: "products/:productId/:productName",
    },
  },
};

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="Products" component={ProductStackScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
