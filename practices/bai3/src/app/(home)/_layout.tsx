import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Icon } from "react-native-paper";

const HomeLayout = () => {
  return (
    <View className="flex flex-1">
      <Tabs
        screenOptions={{ headerShown: false, tabBarActiveTintColor: "purple" }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Icon source={"home"} color={color} size={24} />
            ),
          }}
        />

        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            tabBarIcon: ({ color }) => (
              <Icon source={"cart"} color={color} size={24} />
            ),
          }}
        />

        <Tabs.Screen
          name="sync"
          options={{
            title: "Sync",
            tabBarIcon: ({ color }) => (
              <Icon source={"sync"} color={color} size={24} />
            ),
          }}
        />

        <Tabs.Screen
          name="product-details"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </View>
  );
};

export default HomeLayout;
