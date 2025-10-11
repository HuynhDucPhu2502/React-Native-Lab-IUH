import { DrawerScreenProps } from "@react-navigation/drawer";
import { Text, View } from "react-native";
import { RootDrawerParam } from "../types/navigation";

type Props = DrawerScreenProps<RootDrawerParam, "Profile">;

export const ProfileScreen = ({}: Props) => {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
};
