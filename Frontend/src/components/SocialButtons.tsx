import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SocialButtonsProps {
  onSocialLogin: (provider: "google" | "apple" | "facebook") => void;
}

export default function SocialButtons({ onSocialLogin }: SocialButtonsProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => onSocialLogin("google")}
      >
        <Ionicons name="logo-google" size={24} color="#4285F4" />
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => onSocialLogin("apple")}
      >
        <Ionicons name="logo-apple" size={24} color="#000" />
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => onSocialLogin("facebook")}
      >
        <Ionicons name="logo-facebook" size={24} color="#1877F2" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginTop: 8,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  buttonPressed: { backgroundColor: "#f5f5f5" },
});
