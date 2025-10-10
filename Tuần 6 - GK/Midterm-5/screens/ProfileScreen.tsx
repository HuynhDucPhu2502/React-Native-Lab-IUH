import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UserInfoScreen } from "./UserInfo";
import { ClassInfoScreen } from "./ClassInfo";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export type ProfileTabParamList = {
  UserInfo: undefined;
  ClassInfo: undefined;
};

const Tab = createBottomTabNavigator<ProfileTabParamList>();

export const ProfileScreen = ({}: Props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="UserInfo" component={UserInfoScreen} />
      <Tab.Screen name="ClassInfo" component={ClassInfoScreen} />
    </Tab.Navigator>
  );
};
