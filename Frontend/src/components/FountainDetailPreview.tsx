import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { Fountain } from "../types/fountain";

interface FountainDetailPreviewProps {
  fountain: Fountain;
}

export default function FountainDetailPreview({
  fountain,
}: FountainDetailPreviewProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title} numberOfLines={2}>
          {fountain.name}
        </Text>
        <View style={styles.meta}>
          {fountain.category ? (
            <Text style={styles.category}>{fountain.category}</Text>
          ) : null}
          {fountain.rating !== undefined && (
            <View style={styles.rating}>
              <Text style={styles.ratingValue}>{fountain.rating}</Text>
              <Ionicons name="star" size={16} color="#FFD700" />
            </View>
          )}
        </View>
      </View>
      {fountain.distance ? (
        <Text style={styles.distance}>{fountain.distance}</Text>
      ) : null}
      <View style={styles.hint}>
        <Ionicons name="chevron-up" size={20} color="#666" />
        <Text style={styles.hintText}>Swipe up to view photos and rate</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 8 },
  header: { marginBottom: 8 },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 6,
  },
  meta: { flexDirection: "row", alignItems: "center", gap: 8 },
  category: { fontSize: 14, color: "#666666" },
  rating: { flexDirection: "row", alignItems: "center", gap: 4 },
  ratingValue: { fontSize: 15, fontWeight: "600", color: "#000000" },
  distance: { fontSize: 14, color: "#666666", marginBottom: 16 },
  hint: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 12,
  },
  hintText: { fontSize: 14, color: "#666666" },
});
