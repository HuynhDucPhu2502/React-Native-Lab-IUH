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
              <Icon size={24} source={"home"} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="form"
          options={{
            title: "Form",
            tabBarIcon: ({ color }) => (
              <Icon size={24} source={"form-select"} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="sync"
          options={{
            title: "Sync",
            tabBarIcon: ({ color }) => (
              <Icon size={24} source={"sync"} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
};

export default HomeLayout;
