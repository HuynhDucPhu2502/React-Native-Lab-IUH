import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"

interface ForgotPasswordPageProps {
  onNext: () => void
}

export default function ForgotPasswordPage({ onNext }: ForgotPasswordPageProps) {
  const [email, setEmail] = useState("")

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.lockIcon}>
          <Text style={styles.lockText}>🔒</Text>
        </View>
      </View>

      <Text style={styles.title}>FORGET{"\n"}PASSWORD</Text>

      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>
          Provide your account's email for which you want to reset your password
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.emailInputContainer}>
          <Text style={styles.emailIcon}>✉</Text>
          <TextInput
            style={styles.emailInput}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={onNext}>
        <Text style={styles.nextButtonText}>NEXT</Text>
      </TouchableOpacity>
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
  iconContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  lockIcon: {
    width: 80,
    height: 80,
    backgroundColor: "#333",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  lockText: {
    fontSize: 40,
    color: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
    lineHeight: 30,
  },
  instructionContainer: {
    backgroundColor: "#9B59B6",
    borderRadius: 8,
    padding: 15,
    marginBottom: 30,
  },
  instructionText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
  inputContainer: {
    marginBottom: 40,
  },
  emailInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D4E6D4",
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  emailIcon: {
    fontSize: 18,
    marginRight: 10,
    color: "#666",
  },
  emailInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
    color: "#333",
  },
  nextButton: {
    backgroundColor: "#F1C40F",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    marginBottom: 40,
  },
  nextButtonText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
  },
})
