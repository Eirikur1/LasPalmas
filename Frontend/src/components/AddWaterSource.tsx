import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RATING_EMOJIS = ["😖", "😕", "😐", "🙂", "😍"];

export default function AddWaterSource() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="on-drag"
    >
      <View style={styles.header}>
        <Text style={styles.title}>Add a new water source</Text>
        <Text style={styles.subtitle}>
          Take a picture and show off a new location
        </Text>
        <Pressable
          style={styles.openingHoursLink}
          onPress={() => {}}
          accessibilityLabel="Opening hours"
        >
          <Ionicons name="time-outline" size={18} color="#2563EB" />
          <Text style={styles.openingHoursText}>Opening hours?</Text>
        </Pressable>
      </View>

      <View style={styles.ratingSection}>
        <Text style={styles.sectionTitle}>How would you rate the water?</Text>
        <Text style={styles.sectionSubtitle}>We'd love to know!</Text>
        <View style={styles.emojis}>
          {RATING_EMOJIS.map((emoji, i) => (
            <Pressable
              key={i}
              style={[
                styles.emojiButton,
                selectedRating === i && styles.emojiButtonSelected,
              ]}
              onPress={() => setSelectedRating(i)}
            >
              <Text style={styles.emoji}>{emoji}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={styles.uploadSection}>
        <Text style={styles.sectionTitle}>Upload a Photo</Text>
        <Pressable
          style={styles.uploadArea}
          onPress={() => {}}
          accessibilityLabel="Choose file to upload"
        >
          <View style={styles.uploadIconWrap}>
            <Ionicons name="cloud-upload-outline" size={40} color="#9CA3AF" />
          </View>
          <Text style={styles.uploadHint}>
            Drag & Drop or{" "}
            <Text style={styles.uploadLink}>Choose file</Text>
            {" "}to upload
          </Text>
          <Text style={styles.uploadFormats}>png, jpeg</Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.submitButton}
        onPress={() => {}}
        accessibilityLabel="Upload a new water source"
      >
        <Text style={styles.submitButtonText}>Upload a new water source</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { paddingBottom: 32 },
  header: { marginBottom: 24 },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    marginBottom: 12,
  },
  openingHoursLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  openingHoursText: {
    fontSize: 15,
    color: "#2563EB",
    textDecorationLine: "underline",
    fontWeight: "500",
  },
  ratingSection: { marginBottom: 28 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 6,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 14,
  },
  emojis: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 12,
  },
  emojiButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  emojiButtonSelected: {
    backgroundColor: "#EFF6FF",
    borderWidth: 2,
    borderColor: "#2563EB",
  },
  emoji: { fontSize: 26 },
  uploadSection: { marginBottom: 24 },
  uploadArea: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#D1D5DB",
    borderRadius: 12,
    backgroundColor: "#F9FAFB",
    paddingVertical: 32,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  uploadIconWrap: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  uploadHint: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 6,
    textAlign: "center",
  },
  uploadLink: {
    color: "#2563EB",
    textDecorationLine: "underline",
    fontWeight: "500",
  },
  uploadFormats: {
    fontSize: 12,
    color: "#9CA3AF",
  },
  submitButton: {
    backgroundColor: "#2563EB",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});
