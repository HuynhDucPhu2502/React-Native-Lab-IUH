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
              <Icon source={"home"} size={24} color={color}></Icon>
            ),
          }}
        />

        <Tabs.Screen
          name="form"
          options={{
            title: "Form",
            tabBarIcon: ({ color }) => (
              <Icon source={"form-select"} size={24} color={color}></Icon>
            ),
          }}
        />

        <Tabs.Screen
          name="sync"
          options={{
            title: "Sync",
            tabBarIcon: ({ color }) => (
              <Icon source={"sync"} size={24} color={color}></Icon>
            ),
          }}
        />
      </Tabs>
    </View>
  );
};

export default HomeLayout;
