import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Product } from "../types/Product";
import { useFetch } from "../hooks/useFetch";
import { ActivityIndicator, Button, Card } from "react-native-paper";
import { ProductCard } from "../components/ProductCard";

type Props = NativeStackScreenProps<RootStackParamList, "ProductList">;
const baseUrl = "https://68d67dd6c2a1754b426aeeb4.mockapi.io";

export const ProductListScreen = ({ navigation }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const { isLoading, get, post, put, del } = useFetch(baseUrl);

  const [formData, setFormData] = useState<Product>({
    id: "",
    title: "",
    price: 0,
    description: "",
  });

  const titleRef = useRef<TextInput>(null);
  const priceRef = useRef<TextInput>(null);
  const descriptionRef = useRef<TextInput>(null);

  const handleChangeInput = (value: string, key: string) => {
    setFormData((prev) => {
      return {
        ...prev,
        [key]: key === "price" ? Number(value) : value,
      };
    });
  };

  const handleFetch = useCallback(() => {
    get<Product>("/products").then((res) => setProducts(res));
  }, []);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleDelete = useCallback((id: string) => {
    del(`/products/${id}`).then(() => handleFetch());
  }, []);

  const handleViewDetails = (product: Product) => {
    navigation.navigate("ProductDetails", {
      data: product,
    });
  };

  const handleCreate = useCallback(() => {
    post("/products", formData).then(() => handleFetch());
    setFormData({
      id: "",
      title: "",
      price: 0,
      description: "",
    });

    titleRef.current?.clear();
    priceRef.current?.clear();
    descriptionRef.current?.clear();
  }, [formData]);

  const handleUpdate = useCallback((data: Product) => {
    put(`/products/${data.id}`, data).then(() => handleFetch());
  }, []);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleRefresh = () => {
    setIsRefreshing(true);
    handleFetch();
    setIsRefreshing(false);
  };

  const sortedProducts = useMemo(() => {
    const copyProducts = [...products];

    return copyProducts.sort((a, b) => {
      const priceDiff = b.price - a.price;
      if (priceDiff !== 0) return priceDiff;
      return Number(b.id) - Number(a.id);
    });
  }, [products]);

  if (isLoading)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Product Manager App</Text>
        <ActivityIndicator animating color="purple" size={"large"} />
      </View>
    );

  return (
    <View>
      <Text style={styles.title}>Product Manager App</Text>

      <Card style={{ margin: 10 }}>
        <Card.Title title="Tạo mới sản phẩm" />
        <Card.Content>
          <TextInput
            ref={titleRef}
            style={styles.inputContainer}
            placeholder="Enter product's title"
            onChangeText={(text) => handleChangeInput(text, "title")}
          />
          <TextInput
            ref={priceRef}
            style={styles.inputContainer}
            placeholder="Enter product's price"
            onChangeText={(text) => handleChangeInput(text, "price")}
          />
          <TextInput
            ref={descriptionRef}
            style={styles.inputContainer}
            placeholder="Enter product's description"
            onChangeText={(text) => handleChangeInput(text, "description")}
          />
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={handleCreate}>
            Tạo mới
          </Button>
        </Card.Actions>
      </Card>

      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
          ></RefreshControl>
        }
        data={sortedProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            onUpdate={handleUpdate}
            onPressViewDetailsBtn={handleViewDetails}
            onPressDeleteBtn={handleDelete}
            data={item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  inputContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 4,
  },
});
