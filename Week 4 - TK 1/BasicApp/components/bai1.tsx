import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Bai1 = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.title}>LOGIN</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputIcon}>👤</Text>
          <TextInput
            style={[styles.input, styles.nameInput]}
            placeholder="Name"
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputIcon}>🔒</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#666"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text>👁️</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loginBox: {
    backgroundColor: "#f1c40f",
    width: "100%",
    maxWidth: 350,
    padding: 30,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#d4af37",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 40,
    textAlign: "left",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#d4af37",
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  nameInput: {
    borderColor: "#e74c3c",
  },
  inputIcon: {
    fontSize: 20,
    marginRight: 10,
    color: "#000",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    backgroundColor: "transparent",
  },
  eyeIcon: {
    padding: 5,
  },
  loginButton: {
    backgroundColor: "#000",
    paddingVertical: 15,
    borderRadius: 4,
    marginTop: 20,
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  forgotPassword: {
    alignItems: "center",
  },
  forgotPasswordText: {
    color: "#000",
    fontSize: 16,
  },
});

export default Bai1;
