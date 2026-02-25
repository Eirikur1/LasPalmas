import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { Fountain } from "../types/fountain";

interface FountainDetailProps {
  fountain: Fountain;
}

const RATING_EMOJIS = ["😖", "😕", "😐", "🙂", "😍"];
const STANDBY_GRAY = "#BDBDBD";

export default function FountainDetail({ fountain }: FountainDetailProps) {
  const hasMapImage = Boolean(fountain.imageUrl);
  const images: string[] = fountain.images?.length
    ? fountain.images
    : fountain.imageUrl
      ? [fountain.imageUrl]
      : [];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.card}>
        <View style={[styles.mapWrap, !hasMapImage && styles.mapWrapStandby]}>
          {hasMapImage && (
            <Image
              source={{ uri: fountain.imageUrl! }}
              style={styles.mapImage}
              resizeMode="cover"
            />
          )}
          <View style={styles.marker}>
            <Ionicons name="location" size={40} color="#FF5722" />
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={styles.title} numberOfLines={2}>
              {fountain.name}
            </Text>
            <View style={styles.titleRight}>
              {fountain.category ? (
                <Text style={styles.category}>{fountain.category}</Text>
              ) : null}
              {fountain.rating !== undefined && (
                <View style={styles.rating}>
                  <Text style={styles.ratingValue}>{fountain.rating}</Text>
                  <Ionicons name="star" size={18} color="#FFD700" />
                </View>
              )}
            </View>
          </View>

          <View style={styles.imageRow}>
            {images.length >= 2
              ? images.slice(0, 2).map((uri, i) => (
                  <Image
                    key={i}
                    source={{ uri }}
                    style={styles.galleryImage}
                    resizeMode="cover"
                  />
                ))
              : images.length === 1
                ? (
                  <>
                    <Image
                      source={{ uri: images[0] }}
                      style={styles.galleryImage}
                      resizeMode="cover"
                    />
                    <View style={[styles.galleryImage, styles.galleryPlaceholder]} />
                  </>
                )
                : (
                  <>
                    <View style={[styles.galleryImage, styles.galleryPlaceholder]} />
                    <View style={[styles.galleryImage, styles.galleryPlaceholder]} />
                  </>
                )}
          </View>

          <View style={styles.ratingSection}>
            <Text style={styles.ratingQuestion}>
              How would you rate the water?
            </Text>
            <Text style={styles.ratingSubtitle}>We'd love to know!</Text>
            <View style={styles.emojis}>
              {RATING_EMOJIS.map((emoji, i) => (
                <Pressable key={i} style={styles.emojiButton}>
                  <Text style={styles.emoji}>{emoji}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </View>

      {fountain.description ? (
        <View style={styles.extraSection}>
          <Text style={styles.extraTitle}>Description</Text>
          <Text style={styles.extraText}>{fountain.description}</Text>
        </View>
      ) : null}

      {fountain.distance ? (
        <View style={styles.extraSection}>
          <Text style={styles.extraTitle}>Distance</Text>
          <Text style={styles.extraText}>{fountain.distance}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
}

const CARD_TOP_RADIUS = 24;

const styles = StyleSheet.create({
  container: { flex: 1 },
  card: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: CARD_TOP_RADIUS,
    borderTopRightRadius: CARD_TOP_RADIUS,
    borderBottomLeftRadius: CARD_TOP_RADIUS,
    borderBottomRightRadius: CARD_TOP_RADIUS,
    overflow: "hidden",
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  mapWrap: {
    height: 200,
    backgroundColor: "#e8e8e8",
    position: "relative",
    borderTopLeftRadius: CARD_TOP_RADIUS,
    borderTopRightRadius: CARD_TOP_RADIUS,
    overflow: "hidden",
  },
  mapWrapStandby: { backgroundColor: STANDBY_GRAY },
  mapImage: { width: "100%", height: "100%" },
  marker: { position: "absolute", bottom: 16, alignSelf: "center" },
  content: { paddingHorizontal: 20, paddingVertical: 20 },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 16,
    marginBottom: 20,
  },
  title: {
    flex: 1,
    fontSize: 22,
    fontWeight: "700",
    color: "#000000",
    lineHeight: 28,
  },
  titleRight: { alignItems: "flex-end", minWidth: 80 },
  category: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 6,
  },
  rating: { flexDirection: "row", alignItems: "center", gap: 4 },
  ratingValue: { fontSize: 16, fontWeight: "700", color: "#000000" },
  imageRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  galleryImage: {
    flex: 1,
    height: 120,
    borderRadius: 12,
    overflow: "hidden",
  },
  galleryPlaceholder: { backgroundColor: STANDBY_GRAY },
  ratingSection: { marginBottom: 8 },
  ratingQuestion: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 6,
    textAlign: "center",
  },
  ratingSubtitle: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 16,
    textAlign: "center",
  },
  emojis: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  emojiButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: { fontSize: 28 },
  extraSection: { paddingHorizontal: 20, paddingVertical: 12 },
  extraTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 4,
  },
  extraText: { fontSize: 14, color: "#444444", lineHeight: 22 },
});
