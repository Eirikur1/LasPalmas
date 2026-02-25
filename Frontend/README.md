# Sustainable Island – React Native (Expo)

Mobile app for finding water refill stations. Built with **Expo** and **React Native**.

## Setup

```bash
cd Frontend
npm install
```

## Run

- **iOS simulator:** `npm run ios`
- **Android emulator:** `npm run android`
- **Expo Go (scan QR):** `npm start`

## Maps

The app uses **react-native-maps**: Apple Maps on iOS, Google Maps on Android. No API keys needed for basic use. The map works in **Expo Go**.

## Assets (logos & images)

Put files here and reference them in code:

| Folder | Use for | How to use in code |
|--------|---------|--------------------|
| **`assets/images/`** | PNG, JPG, WebP (photos, illustrations) | `require('../assets/images/logo.png')` then `<Image source={logo} />` |
| **`assets/icons/`** | SVG (logos, icons) | `import Logo from '../assets/icons/logo.svg'` then `<Logo width={120} height={40} />` |

- **Images:** Use with React Native’s `<Image source={require('../assets/images/photo.jpg')} />`.
- **SVGs:** Drop `.svg` files in `assets/icons/` and import as components (see above). Restart the dev server after adding new SVGs.

## Structure

- `App.tsx` – Root with navigation
- `src/screens/` – Home, SignIn, SignUp
- `src/components/` – Map, BottomSheet, FountainCard, FountainDetail, ProfileMenu, etc.
- `src/navigation/types.ts` – Stack param list
- `src/constants/mockFountains.ts` – Mock fountain data

## Stack

- Expo SDK 52
- React Navigation (native stack)
- react-native-maps (Apple Maps / Google Maps)
- @gorhom/bottom-sheet
- react-native-gesture-handler, react-native-reanimated
