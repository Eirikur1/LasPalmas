import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";
import { BackHeader, FormInput, SocialButtons } from "../components";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation<NavProp>();

  const handleContinue = (e: React.FormEvent) => {
    // TODO: Implement sign up logic
  };

  const handleSocialLogin = (provider: "google" | "apple" | "facebook") => {
    // TODO: Implement social login
  };

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <BackHeader title="Sign Up" backTo="Home" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <FormInput
          label="Full Name"
          type="text"
          placeholder="Enter full name"
          value={name}
          onChange={setName}
          required
        />
        <FormInput
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={setEmail}
          required
        />
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <Pressable onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.link}>Sign In</Text>
          </Pressable>
        </View>
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or</Text>
          <View style={styles.dividerLine} />
        </View>
        <SocialButtons onSocialLogin={handleSocialLogin} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scroll: { flex: 1 },
  content: { padding: 20, paddingBottom: 40 },
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 20,
  },
  buttonPressed: { opacity: 0.9 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  footer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 24,
  },
  footerText: { fontSize: 14, color: "#666" },
  link: { fontSize: 14, color: "#2196F3", fontWeight: "600" },
  divider: { flexDirection: "row", alignItems: "center", marginVertical: 16 },
  dividerLine: { flex: 1, height: 1, backgroundColor: "#ddd" },
  dividerText: { marginHorizontal: 12, fontSize: 14, color: "#999" },
});
