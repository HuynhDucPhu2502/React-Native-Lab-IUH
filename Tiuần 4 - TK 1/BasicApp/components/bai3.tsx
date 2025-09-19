"use client";

import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const Bai3 = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Product Card */}
      <View style={styles.productCard}>
        <Image
          source={{
            uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PuP7r1uOrKaMXNC0CDHZCwIq4uurt3.png",
          }}
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>
            Nguyên hàm tích phân và ứng dụng{"\n"}Cùng cậu bé Tiki Trading
          </Text>
          <Text style={styles.price}>141.800 đ</Text>
          <Text style={styles.originalPrice}>141.800 đ</Text>

          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={decreaseQuantity}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={increaseQuantity}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyLaterButton}>
              <Text style={styles.buyLaterText}>Mua sau</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.discountSection}>
            <Text style={styles.discountSaved}>Mã giảm giá đã lưu</Text>
            <TouchableOpacity>
              <Text style={styles.viewHereText}>Xem tại đây</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.discountButtons}>
            <TouchableOpacity style={styles.discountCodeButton}>
              <Text style={styles.discountCodeText}>🎫 Mã giảm giá</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Áp dụng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Gift Section */}
      <View style={styles.giftSection}>
        <Text style={styles.giftText}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
          <Text style={styles.enterHereText}> Nhập tại đây?</Text>
        </Text>
      </View>

      {/* Order Summary */}
      <View style={styles.summarySection}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Tạm tính</Text>
          <Text style={styles.summaryPrice}>141.800 đ</Text>
        </View>
      </View>

      <View style={styles.totalSection}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Thành tiền</Text>
          <Text style={styles.totalPrice}>141.800 đ</Text>
        </View>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  productCard: {
    backgroundColor: "white",
    margin: 10,
    padding: 15,
    borderRadius: 8,
    flexDirection: "row",
  },
  productImage: {
    width: 80,
    height: 100,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    lineHeight: 18,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d32f2f",
    marginBottom: 4,
  },
  originalPrice: {
    fontSize: 12,
    color: "#999",
    textDecorationLine: "line-through",
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  quantityButton: {
    width: 30,
    height: 30,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quantity: {
    marginHorizontal: 15,
    fontSize: 16,
    fontWeight: "bold",
  },
  buyLaterButton: {
    marginLeft: "auto",
  },
  buyLaterText: {
    color: "#1976d2",
    fontSize: 14,
  },
  discountSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  discountSaved: {
    fontSize: 12,
    color: "#666",
  },
  viewHereText: {
    fontSize: 12,
    color: "#1976d2",
    marginLeft: 10,
  },
  discountButtons: {
    flexDirection: "row",
    gap: 10,
  },
  discountCodeButton: {
    flex: 1,
    backgroundColor: "#fff3cd",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ffc107",
  },
  discountCodeText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  applyButton: {
    backgroundColor: "#1976d2",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    justifyContent: "center",
  },
  applyButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  giftSection: {
    backgroundColor: "white",
    margin: 10,
    padding: 15,
    borderRadius: 8,
  },
  giftText: {
    fontSize: 14,
    color: "#666",
  },
  enterHereText: {
    color: "#1976d2",
  },
  summarySection: {
    backgroundColor: "#e0e0e0",
    margin: 10,
    padding: 15,
    borderRadius: 8,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  summaryLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  summaryPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d32f2f",
  },
  totalSection: {
    backgroundColor: "white",
    margin: 10,
    padding: 15,
    borderRadius: 8,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  totalLabel: {
    fontSize: 16,
    color: "#666",
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d32f2f",
  },
  orderButton: {
    backgroundColor: "#d32f2f",
    padding: 15,
    borderRadius: 4,
    alignItems: "center",
  },
  orderButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Bai3;
