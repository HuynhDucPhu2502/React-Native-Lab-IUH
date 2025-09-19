import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"

export default function CodeVerificationPage() {
  const [code, setCode] = useState(["", "", "", "", "", ""])

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code]
    newCode[index] = text
    setCode(newCode)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CODE{"\n"}VERIFICATION</Text>

      <Text style={styles.subtitle}>Enter ontime password sent on{"\n"}+1849902665798</Text>

      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            value={digit}
            onChangeText={(text) => handleCodeChange(text, index)}
            maxLength={1}
            keyboardType="numeric"
            textAlign="center"
          />
        ))}
      </View>

      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>VERIFY CODE</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F5E8",
    paddingHorizontal: 20,
    paddingTop: 80,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    color: "#333",
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    color: "#333",
    lineHeight: 22,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
    paddingHorizontal: 10,
  },
  codeInput: {
    width: 45,
    height: 45,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#D4E6D4",
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginHorizontal: 5,
  },
  verifyButton: {
    backgroundColor: "#F1C40F",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 60,
    alignItems: "center",
  },
  verifyButtonText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
  },
})
