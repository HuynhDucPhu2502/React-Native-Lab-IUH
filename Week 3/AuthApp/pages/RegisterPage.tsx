import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [selectedGender, setSelectedGender] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>REGISTER</Text>

        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#666" />

          <TextInput style={styles.input} placeholder="Phone" placeholderTextColor="#666" keyboardType="phone-pad" />

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#666"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              placeholderTextColor="#666"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity style={styles.eyeButton} onPress={() => setShowPassword(!showPassword)}>
              <Text style={styles.eyeIcon}>👁</Text>
            </TouchableOpacity>
          </View>

          <TextInput style={styles.input} placeholder="Birthday" placeholderTextColor="#666" />

          <View style={styles.genderContainer}>
            <TouchableOpacity style={styles.genderOption} onPress={() => setSelectedGender("male")}>
              <View style={[styles.radioButton, selectedGender === "male" && styles.radioButtonSelected]} />
              <Text style={styles.genderText}>Male</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.genderOption} onPress={() => setSelectedGender("female")}>
              <View style={[styles.radioButton, selectedGender === "female" && styles.radioButtonSelected]} />
              <Text style={styles.genderText}>Female</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>REGISTER</Text>
          </TouchableOpacity>

          <Text style={styles.termsText}>When you agree to terms and conditions</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B8E6B8",
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    color: "#333",
  },
  formContainer: {
    flex: 1,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 8,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 16,
    color: "#333",
  },
  eyeButton: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  eyeIcon: {
    fontSize: 18,
  },
  genderContainer: {
    flexDirection: "row",
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  genderOption: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 40,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#333",
    marginRight: 10,
    backgroundColor: "transparent",
  },
  radioButtonSelected: {
    backgroundColor: "#333",
  },
  genderText: {
    fontSize: 16,
    color: "#333",
  },
  registerButton: {
    backgroundColor: "#D2691E",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  registerButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  termsText: {
    textAlign: "center",
    fontSize: 12,
    color: "#666",
    marginTop: 10,
  },
})
