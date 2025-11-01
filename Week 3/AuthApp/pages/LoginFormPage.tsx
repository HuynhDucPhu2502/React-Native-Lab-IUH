import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"

interface LoginFormPageProps {
  onNavigateToForgotPassword: () => void
}

export default function LoginFormPage({ onNavigateToForgotPassword }: LoginFormPageProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder=""
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              value={password}
              onChangeText={setPassword}
              placeholder=""
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity style={styles.eyeButton} onPress={() => setShowPassword(!showPassword)}>
              <Text style={styles.eyeIcon}>👁</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>When you agree to terms and conditions</Text>

        <TouchableOpacity onPress={onNavigateToForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot your password?</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or login with</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
            <Text style={styles.socialButtonText}>f</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.socialButton, styles.zButton]}>
            <Text style={styles.socialButtonText}>Z</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
            <Text style={styles.socialButtonText}>G</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F5E8",
    paddingHorizontal: 20,
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
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
    marginLeft: 4,
  },
  input: {
    backgroundColor: "#D4E6D4",
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    color: "#333",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D4E6D4",
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
    color: "#333",
  },
  eyeButton: {
    padding: 15,
  },
  eyeIcon: {
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: "#E74C3C",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  termsText: {
    textAlign: "center",
    color: "#666",
    fontSize: 12,
    marginBottom: 10,
  },
  forgotPassword: {
    textAlign: "center",
    color: "#3498DB",
    fontSize: 14,
    marginBottom: 20,
  },
  orText: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  socialButton: {
    width: 80,
    height: 40,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  socialButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  facebookButton: {
    backgroundColor: "#3B5998",
  },
  zButton: {
    backgroundColor: "#1DA1F2",
  },
  googleButton: {
    backgroundColor: "#DB4437",
  },
})
