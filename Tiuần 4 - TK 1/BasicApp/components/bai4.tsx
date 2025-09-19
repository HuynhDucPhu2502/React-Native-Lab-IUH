"use client";

import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const Bai4 = () => {
  const [passwordLength, setPasswordLength] = useState("");
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialSymbols, setIncludeSpecialSymbols] = useState(false);

  const CheckBox = ({ checked, onPress, label }) => (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={styles.checkboxLabel}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>PASSWORD{"\n"}GENERATOR</Text>

        <View style={styles.passwordDisplay} />

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password length</Text>
          <TextInput
            style={styles.input}
            value={passwordLength}
            onChangeText={setPasswordLength}
            keyboardType="numeric"
          />
        </View>

        <CheckBox
          checked={includeLowercase}
          onPress={() => setIncludeLowercase(!includeLowercase)}
          label="Include lower case letters"
        />

        <CheckBox
          checked={includeUppercase}
          onPress={() => setIncludeUppercase(!includeUppercase)}
          label="Include upcase letters"
        />

        <CheckBox
          checked={includeNumbers}
          onPress={() => setIncludeNumbers(!includeNumbers)}
          label="Include number"
        />

        <CheckBox
          checked={includeSpecialSymbols}
          onPress={() => setIncludeSpecialSymbols(!includeSpecialSymbols)}
          label="Include special symbol"
        />

        <TouchableOpacity style={styles.generateButton}>
          <Text style={styles.generateButtonText}>GENERATE PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3b4371",
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: "#2d3561",
    margin: 20,
    borderRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 30,
  },
  passwordDisplay: {
    height: 50,
    backgroundColor: "#1a1f3a",
    borderRadius: 8,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  inputLabel: {
    color: "white",
    fontSize: 16,
    flex: 1,
  },
  input: {
    backgroundColor: "white",
    width: 80,
    height: 35,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "transparent",
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "white",
  },
  checkmark: {
    color: "#2d3561",
    fontSize: 16,
    fontWeight: "bold",
  },
  checkboxLabel: {
    color: "white",
    fontSize: 16,
    flex: 1,
  },
  generateButton: {
    backgroundColor: "#5d4e75",
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 30,
  },
  generateButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Bai4;
