import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Text, View } from "react-native";
import { List } from "react-native-paper";

type Props = NativeStackScreenProps<RootStackParamList, "ProductDetails">;

export const ProductDetailsScreen = ({ route }: Props) => {
  const { data } = route.params;

  return (
    <View>
      <List.Section title="Product Details">
        <List.Item title="ID" description={data.id} />
        <List.Item title="Title" description={data.title} />
        <List.Item title="Price" description={data.price.toString()} />
        <List.Item title="Description" description={data.description} />
      </List.Section>
    </View>
  );
};
