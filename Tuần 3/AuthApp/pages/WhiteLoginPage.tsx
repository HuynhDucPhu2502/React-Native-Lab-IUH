import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function WhiteLoginPage() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.eyeBackground}>
          <View style={styles.eyeball}>
            <View style={styles.pupil} />
          </View>
        </View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#999" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Please input user name"
            placeholderTextColor="#999"
            value={userName}
            onChangeText={setUserName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Please input password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.linksContainer}>
          <TouchableOpacity>
            <Text style={styles.linkText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.otherMethodsText}>Other Login Methods</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#5DADE2" }]}>
            <Ionicons name="person" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#F39C12" }]}>
            <Ionicons name="wifi" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#3B5998" }]}>
            <Text style={styles.facebookText}>f</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 40,
  },
  eyeBackground: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
  },
  eyeball: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  pupil: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#4CAF50",
  },
  formContainer: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginBottom: 25,
    paddingBottom: 10,
  },
  inputIcon: {
    marginRight: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingVertical: 5,
  },
  loginButton: {
    backgroundColor: "#4285F4",
    borderRadius: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  linksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  linkText: {
    color: "#333",
    fontSize: 14,
  },
  otherMethodsText: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
    marginBottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    paddingTop: 20,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  facebookText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
})
