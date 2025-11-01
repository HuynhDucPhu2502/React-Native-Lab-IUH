import { Stack } from "expo-router";
export default function ShopLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Shoes" }} />
      <Stack.Screen name="product/[id]" options={{ title: "Detail" }} />
      <Stack.Screen name="purchase/[id]" options={{ title: "Purchase" }} />{" "}
    </Stack>
  );
}
