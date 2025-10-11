import { DrawerScreenProps } from "@react-navigation/drawer";
import { Text, View } from "react-native";
import { RootDrawerParam } from "../types/navigation";

type Props = DrawerScreenProps<RootDrawerParam, "Home">;

export const HomeScreen = ({}: Props) => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};
