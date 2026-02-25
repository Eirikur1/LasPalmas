import React, { useRef, useEffect } from "react";
import { StyleSheet, View, Platform } from "react-native";
import MapView, { Marker } from "react-native-maps";
import type { Fountain } from "../types/fountain";
import { darkMapStyle } from "../constants/mapStyles";

const DEFAULT_REGION = {
  latitude: 28.1235,
  longitude: -15.4363,
  latitudeDelta: 0.02,
  longitudeDelta: 0.02,
};

interface MapProps {
  fountains: Fountain[];
  region?: {
    latitude: number;
    longitude: number;
    latitudeDelta?: number;
    longitudeDelta?: number;
  };
  selectedFountain?: Fountain | null;
  onMapPress?: () => void;
  onFountainPress?: (fountain: Fountain) => void;
}

export default function Map({
  fountains = [],
  region,
  selectedFountain,
  onMapPress,
  onFountainPress,
}: MapProps) {
  const mapRef = useRef<MapView>(null);
  const hasAnimatedToUserRef = useRef(false);
  const safeFountains = Array.isArray(fountains) ? fountains : [];

  useEffect(() => {
    if (selectedFountain && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: selectedFountain.latitude,
          longitude: selectedFountain.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        500,
      );
    }
  }, [selectedFountain]);

  useEffect(() => {
    if (region && mapRef.current && !hasAnimatedToUserRef.current) {
      hasAnimatedToUserRef.current = true;
      mapRef.current.animateToRegion(
        {
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: region.latitudeDelta ?? 0.02,
          longitudeDelta: region.longitudeDelta ?? 0.02,
        },
        600,
      );
    }
  }, [region]);

  const initialRegion = region
    ? {
        ...DEFAULT_REGION,
        latitude: region.latitude,
        longitude: region.longitude,
        latitudeDelta: region.latitudeDelta ?? 0.02,
        longitudeDelta: region.longitudeDelta ?? 0.02,
      }
    : DEFAULT_REGION;

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={initialRegion}
        onPress={onMapPress}
        showsUserLocation
        showsMyLocationButton
        customMapStyle={Platform.OS === "android" ? darkMapStyle : undefined}
        mapType={Platform.OS === "ios" ? "muted" : undefined}
      >
        {safeFountains.map((fountain) => (
          <Marker
            key={fountain.id}
            coordinate={{
              latitude: fountain.latitude,
              longitude: fountain.longitude,
            }}
            title={fountain.name}
            description={fountain.description}
            image={
              fountain.isOperational
                ? require("../../assets/icons/PinIcon.png")
                : require("../../assets/icons/AdminPin.png") // For now: inactive. Later: AdminPin = verified water stations.
            }
            onPress={() => onFountainPress?.(fountain)}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: "100%", height: "100%" },
});
