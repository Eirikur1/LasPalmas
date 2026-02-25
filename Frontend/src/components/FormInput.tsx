import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface FormInputProps {
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  showToggle?: boolean;
}

export default function FormInput({
  label,
  type,
  placeholder,
  value,
  onChange,
  required = false,
  showToggle = true,
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === "password" && showPassword ? "text" : type;
  const isPassword = type === "password";

  return (
    <View style={styles.group}>
      <Text style={styles.label}>
        {label}
        {required ? " *" : ""}
      </Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#999"
          value={value}
          onChangeText={onChange}
          keyboardType={type === "email" ? "email-address" : "default"}
          secureTextEntry={type === "password" && !showPassword}
          autoCapitalize={type === "email" ? "none" : "sentences"}
          autoCorrect={type !== "email"}
        />
        {isPassword && showToggle && (
          <Pressable
            style={styles.toggle}
            onPress={() => setShowPassword(!showPassword)}
            hitSlop={8}
          >
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#666"
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  group: { marginBottom: 16 },
  label: { fontSize: 14, fontWeight: "500", color: "#333", marginBottom: 6 },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 14,
  },
  input: { flex: 1, fontSize: 16, color: "#333", paddingVertical: 12 },
  toggle: { padding: 4 },
});
