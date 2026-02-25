import { Linking, Platform } from "react-native";

/**
 * Open the device maps app for directions to a location.
 * Uses Apple Maps on iOS and Google Maps on Android (or default map app).
 */
export async function openDirections(
  latitude: number,
  longitude: number,
  label?: string,
): Promise<void> {
  const lat = latitude;
  const lon = longitude;
  const encodedName = label ? encodeURIComponent(label) : "";

  let url: string;
  if (Platform.OS === "ios") {
    url = `https://maps.apple.com/?daddr=${lat},${lon}${encodedName ? `&q=${encodedName}` : ""}`;
  } else {
    url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;
  }

  try {
    await Linking.openURL(url);
  } catch {
    const geoUrl = `geo:${lat},${lon}?q=${lat},${lon}${encodedName ? `(${encodedName})` : ""}`;
    await Linking.openURL(geoUrl);
  }
}
