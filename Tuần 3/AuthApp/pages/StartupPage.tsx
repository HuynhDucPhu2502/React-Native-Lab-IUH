import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

interface StartupPageProps {
  onNavigateToLogin: () => void
  onNavigateToLoginForm: () => void
  onNavigateToRegister: () => void
  onNavigateToYellowLogin: () => void
  onNavigateToWhiteLogin: () => void
}

export default function StartupPage({
  onNavigateToLogin,
  onNavigateToLoginForm,
  onNavigateToRegister,
  onNavigateToYellowLogin,
  onNavigateToWhiteLogin,
}: StartupPageProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <View style={styles.circle} />

        <Text style={styles.title}>GROW{"\n"}YOUR BUSINESS</Text>

        <Text style={styles.subtitle}>We will help you to grow your business using{"\n"}online server</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onNavigateToLoginForm}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onNavigateToRegister}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginOptionsContainer}>
          <Text style={styles.loginOptionsTitle}>Choose Login Style:</Text>
          <View style={styles.loginOptionsButtons}>
            <TouchableOpacity style={styles.yellowLoginButton} onPress={onNavigateToYellowLogin}>
              <Text style={styles.yellowLoginText}>Yellow Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.whiteLoginButton} onPress={onNavigateToWhiteLogin}>
              <Text style={styles.whiteLoginText}>White Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#00BCD4",
  },
  content: {
    flex: 1,
    padding: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 80,
    height: 80,
    backgroundColor: "transparent",
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "#000",
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 28,
  },
  subtitle: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 32,
  },
  button: {
    backgroundColor: "#FFC107",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: "#000",
    fontWeight: "600",
    fontSize: 14,
  },
  loginOptionsContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  loginOptionsTitle: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
    marginBottom: 12,
  },
  loginOptionsButtons: {
    flexDirection: "row",
    gap: 12,
  },
  yellowLoginButton: {
    backgroundColor: "#FFD700",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#000",
  },
  yellowLoginText: {
    color: "#000",
    fontWeight: "500",
    fontSize: 12,
  },
  whiteLoginButton: {
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#007BFF",
  },
  whiteLoginText: {
    color: "#007BFF",
    fontWeight: "500",
    fontSize: 12,
  },
})
