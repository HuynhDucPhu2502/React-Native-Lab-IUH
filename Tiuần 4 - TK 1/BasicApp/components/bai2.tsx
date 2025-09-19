import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const Bai2 = () => {
  return (
    <View style={styles.container}>
      {/* Product Info */}
      <View style={styles.productSection}>
        <Image
          source={{ uri: "https://via.placeholder.com/60x40/333/fff?text=USB" }}
          style={styles.productImage}
        />
        <Text style={styles.productTitle}>
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
          bluetooth
        </Text>
      </View>

      {/* Satisfaction Text */}
      <Text style={styles.satisfactionText}>Cực kỳ hài lòng</Text>

      {/* Star Rating */}
      <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Text key={star} style={styles.star}>
            ⭐
          </Text>
        ))}
      </View>

      {/* Add Image Button */}
      <TouchableOpacity style={styles.addImageButton}>
        <Text style={styles.cameraIcon}>📷</Text>
        <Text style={styles.addImageText}>Thêm hình ảnh</Text>
      </TouchableOpacity>

      {/* Review Text Input */}
      <TextInput
        style={styles.reviewInput}
        placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
        multiline={true}
        numberOfLines={6}
        textAlignVertical="top"
      />

      {/* URL Input */}
      <TextInput
        style={styles.urlInput}
        value="https://meet.google.com/nsj-ojwr-xpp"
        editable={false}
      />

      {/* Send Button */}
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Gửi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  productSection: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
  },
  productImage: {
    width: 60,
    height: 40,
    marginRight: 15,
    backgroundColor: "#333",
  },
  productTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  satisfactionText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#333",
  },
  starContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  star: {
    fontSize: 30,
    marginHorizontal: 5,
  },
  addImageButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#4285f4",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  cameraIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  addImageText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  reviewInput: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    height: 120,
    marginBottom: 15,
    fontSize: 14,
  },
  urlInput: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    fontSize: 12,
    color: "#666",
  },
  sendButton: {
    backgroundColor: "#4285f4",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
  },
  sendButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Bai2;
