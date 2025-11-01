import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function YellowLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="person" size={20} color="#333" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#666"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={20} color="#333" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? "eye" : "eye-off"} size={20} color="#333" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={styles.createAccountButtonText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4D03F",
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 60,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 15,
    height: 50,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  eyeIcon: {
    padding: 5,
  },
  loginButton: {
    backgroundColor: "#000",
    borderRadius: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  createAccountButton: {
    backgroundColor: "transparent",
    borderRadius: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  createAccountButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
})
