# React Native / Expo Boilerplate

A production-ready React Native/Expo boilerplate for bootstrapping mobile applications. Pre-configured with file-based navigation, light/dark Restyle theming, swipeable tab transitions, strict quality tooling, and environment-aware configuration.

---

## Screenshots

|                              Light Mode                              |                             Dark Mode                              |                   Swipeable Tabs / Deep Linking                    |
| :------------------------------------------------------------------: | :----------------------------------------------------------------: | :----------------------------------------------------------------: |
| ![Light Mode Screenshot](./assets/images/placeholder-light-mode.png) | ![Dark Mode Screenshot](./assets/images/placeholder-dark-mode.png) | ![Swipeable Tabs Screenshot](./assets/images/placeholder-tabs.png) |

---

## Key Stack & Dependency Versions

| Category                  | Choice                                     | Exact Version                                                                   |
| ------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------- |
| **Framework**             | Expo SDK                                   | `~57.0.10`                                                                      |
| **React / React Native**  | React & React Native                       | `19.2.3` / `0.86.2`                                                             |
| **Language**              | TypeScript                                 | `~6.0.3` (Strict Mode)                                                          |
| **Navigation**            | Expo Router                                | `~57.0.10`                                                                      |
| **Tab Navigation**        | Material Top Tabs + Pager View             | `@react-navigation/material-top-tabs ^7.6.14` + `react-native-pager-view 8.0.2` |
| **Theming**               | Restyle                                    | `@shopify/restyle ^2.4.5`                                                       |
| **Client State**          | Zustand                                    | `^5.0.14`                                                                       |
| **Server State**          | TanStack Query                             | `^5.101.4`                                                                      |
| **Key-Value Storage**     | MMKV + Async Storage                       | `react-native-mmkv ^4.3.2` + `@react-native-async-storage/async-storage 3.1.1`  |
| **Secure Storage**        | Expo Secure Store                          | `~57.0.1`                                                                       |
| **Forms & Validation**    | React Hook Form + Zod                      | `react-hook-form ^7.84.0` + `zod ^4.4.3`                                        |
| **Animations & Gestures** | Reanimated + Gesture Handler               | `react-native-reanimated 4.5.1` + `react-native-gesture-handler ~2.32.0`        |
| **Linting & Quality**     | ESLint v9 + Prettier + Husky + lint-staged | `eslint ^9.39.5` + `prettier ^3.9.6` + `husky ^9.1.7`                           |
| **Error Tracking**        | Sentry                                     | `@sentry/react-native ^8.22.0`                                                  |

---

## Project Structure

```
my-app/
├── .husky/              # Git hooks (pre-commit type check & lint-staged)
├── assets/              # App icons, splash screen, and images
├── src/
│   ├── app/             # Expo Router file-based routing & auth protection
│   │   ├── _layout.tsx  # Root Layout (Auth gate + AppThemeProvider)
│   │   ├── (app)/       # Authenticated routes group with swipeable top tabs
│   │   │   ├── _layout.tsx
│   │   │   ├── index.tsx
│   │   │   └── profile/[id].tsx
│   │   └── (auth)/      # Unauthenticated auth routes group
│   │       └── sign-in.tsx
│   ├── components/      # Restyle primitives & UI components (Box, Text, Card, Button, Screen)
│   ├── context/         # AuthContext and ThemeContext (Light/Dark + AsyncStorage)
│   ├── hooks/           # Custom hooks
│   ├── store/           # Zustand state stores
│   └── theme/           # Restyle theme design tokens & variants (lightTheme & darkTheme)
├── app.config.ts        # Dynamic Expo config supporting environment switching (dev/staging/prod)
├── eas.json             # EAS build profiles (development, preview, production)
├── eslint.config.mjs    # ESLint v9 Flat Configuration
├── .npmrc               # Lock exact dependency versions (save-exact=true)
├── .nvmrc               # Node runtime version lock (20.18.0)
└── tsconfig.json        # Strict TypeScript configuration
```

---

## Getting Started

```bash
# Clone the repository
git clone git@github.com:samriddha-gautam/React-Native-Expo-Boilerplate.git
cd React-Native-Expo-Boilerplate/my-app

# Install exact dependencies
npm ci

# Start the Expo development server
npm run start
```

---

## Available Scripts

- `npm run start` - Launch Expo development server.
- `npm run format` - Format codebase using Prettier.
- `npm run type-check` - Perform strict TypeScript type checks (`tsc --noEmit`).
- `npm run lint` - Run ESLint v9 checks.

---

## Boilerplate Setup Checklist for New Projects

Before submitting a new app to app stores, update placeholders in:

- [ ] `app.config.ts` → `name`, `slug`
- [ ] `app.config.ts` → `ios.bundleIdentifier`
- [ ] `app.config.ts` → `android.package`
- [ ] `app.config.ts` → custom URL `scheme` (for deep linking)
- [ ] `eas.json` → confirm build profiles
- [ ] `assets/` → App icons, splash screen, and images

> ⚠️ **Important:** Rename `bundleIdentifier` and `android.package` **before** your first store submission.

---

## Deep Linking

Custom scheme deep links are routed through Expo Router:

```bash
# Test iOS Deep Link:
npx uri-scheme open myapp://profile/123 --ios

# Test Android Deep Link:
npx uri-scheme open myapp://profile/123 --android
```
