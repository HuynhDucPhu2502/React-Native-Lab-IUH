import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Icon } from "react-native-paper";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "purple" }}
    >
      <Tabs.Screen
        name="list"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              source={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            ></Icon>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="form"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              source={focused ? "list-box" : "list-box-outline"}
              size={24}
              color={color}
            ></Icon>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="trash"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              source={focused ? "trash-can" : "trash-can-outline"}
              size={24}
              color={color}
            ></Icon>
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabsLayout;
