import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

interface LoginPageProps {
  onNavigateToLoginForm: () => void
  onNavigateToRegister: () => void 
}

export default function LoginPage({ onNavigateToLoginForm, onNavigateToRegister }: LoginPageProps) {
  return (
    <LinearGradient colors={["#E0F7FA", "#4DD0E1"]} style={styles.screen}>
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

        <View style={styles.howWeWorkContainer}>
          <Text style={styles.howWeWorkText}>HOW WE WORK?</Text>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
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
  howWeWorkContainer: {
    backgroundColor: "#B2EBF2",
    borderRadius: 8,
    padding: 16,
    width: "100%",
  },
  howWeWorkText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
})
