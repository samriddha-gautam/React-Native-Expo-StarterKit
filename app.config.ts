import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  const APP_ENV = process.env.APP_ENV || "development";

  const getEnvConfig = () => {
    switch (APP_ENV) {
      case "production":
        return {
          name: "Boilerplate App",
          apiUrl: "https://api.example.com",
          bundleIdentifier: "com.boilerplate.rnexpo",
          package: "com.boilerplate.rnexpo",
        };
      case "staging":
        return {
          name: "Boilerplate (Staging)",
          apiUrl: "https://staging-api.example.com",
          bundleIdentifier: "com.boilerplate.rnexpo.staging",
          package: "com.boilerplate.rnexpo.staging",
        };
      case "development":
      default:
        return {
          name: "Boilerplate (Dev)",
          apiUrl: "https://dev-api.example.com",
          bundleIdentifier: "com.boilerplate.rnexpo.dev",
          package: "com.boilerplate.rnexpo.dev",
        };
    }
  };

  const envConfig = getEnvConfig();

  return {
    ...config,
    name: envConfig.name,
    slug: "rn-boilerplate",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    ios: {
      ...config.ios,
      icon: "./assets/expo.icon",
      bundleIdentifier: envConfig.bundleIdentifier,
    },
    android: {
      ...config.android,
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png",
      },
      predictiveBackGestureEnabled: false,
      package: envConfig.package,
    },
    web: {
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          backgroundColor: "#208AEF",
          image: "./assets/images/splash-icon.png",
          imageWidth: 76,
        },
      ],
      "expo-secure-store",
      [
        "@sentry/react-native/expo",
        {
          url: "https://sentry.io/",
          project: "react-native",
          organization: "samriddha-gautam",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    extra: {
      ...config.extra,
      APP_ENV,
      apiUrl: envConfig.apiUrl,
      eas: {
        projectId: "9dd823cb-aadb-42f9-84fa-cea94efc1b95",
      },
    },
  };
};
