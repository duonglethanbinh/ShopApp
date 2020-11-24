import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Category from "./screens/Category";
import Categories from "./screens/Categories";
import Cart from "./screens/Cart";
import Orders from "./screens/Orders";
import Settings from "./screens/Setting";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen
        name="Category"
        component={Category}
        options={({ route }) => ({ title: route.params.categoryName })}
      />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "ios-home";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list-box" : "ios-list";
            } else if (route.name === "Cart") {
              iconName = "ios-cart";
            } else if (route.name === "Orders") {
              iconName = "ios-cash";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{ tabBarLabel: "Cart" }}
        />
        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{ tabBarLabel: "Orders" }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{ tabBarLabel: "Settings" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
