import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { Fountain } from "../types/fountain";

interface FountainCardProps {
  fountain: Fountain;
  onClick?: () => void;
  showImage?: boolean;
}

export default function FountainCard({
  fountain,
  onClick,
  showImage = true,
}: FountainCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      onPress={onClick}
    >
      {showImage && (
        <View style={styles.imageWrap}>
          {fountain.imageUrl ? (
            <Image
              source={{ uri: fountain.imageUrl }}
              style={styles.image}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.placeholder}>
              <Ionicons name="water" size={32} color="#2196F3" />
            </View>
          )}
        </View>
      )}
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={1}>
            {fountain.name}
          </Text>
          {fountain.category ? (
            <Text style={styles.category}>{fountain.category}</Text>
          ) : null}
        </View>
        <View style={styles.details}>
          {fountain.distance ? (
            <Text style={styles.distance}>{fountain.distance}</Text>
          ) : null}
          {fountain.isFree !== undefined && (
            <Text style={styles.price}>
              {fountain.isFree ? "Free" : "Paid"}
            </Text>
          )}
        </View>
        {fountain.rating !== undefined && (
          <View style={styles.rating}>
            <Text style={styles.ratingValue}>{fountain.rating}</Text>
            <Ionicons name="star" size={16} color="#FFD700" />
          </View>
        )}
      </View>
      <Ionicons name="chevron-forward" size={20} color="#999" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  cardPressed: { backgroundColor: "#f9f9f9" },
  imageWrap: {
    width: 56,
    height: 56,
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 12,
  },
  image: { width: "100%", height: "100%" },
  placeholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E3F2FD",
    alignItems: "center",
    justifyContent: "center",
  },
  content: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 4,
  },
  title: { fontSize: 16, fontWeight: "600", color: "#000", flex: 1 },
  category: {
    fontSize: 12,
    color: "#2196F3",
    backgroundColor: "#E3F2FD",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  details: { flexDirection: "row", gap: 8, marginBottom: 4 },
  distance: { fontSize: 13, color: "#666" },
  price: { fontSize: 13, color: "#666" },
  rating: { flexDirection: "row", alignItems: "center", gap: 4 },
  ratingValue: { fontSize: 14, fontWeight: "600", color: "#000" },
});
