import { createTheme } from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22B2",

  white: "#FFFFFF",
  black: "#0B0E14",
  darkBg: "#121824",
  darkCardBg: "#1E2638",
  lightBg: "#F4F6F8",
  lightCardBg: "#FFFFFF",

  gray100: "#F8F9FA",
  gray200: "#E9ECEF",
  gray300: "#DEE2E6",
  gray600: "#6C757D",
  gray800: "#343A40",

  primary: "#208AEF",
  primaryDark: "#1869B7",
  danger: "#FF3B30",
};

export const theme = createTheme({
  colors: {
    mainBackground: palette.lightBg,
    cardBackground: palette.lightCardBg,
    textPrimary: palette.black,
    textSecondary: palette.gray600,
    primary: palette.primary,
    border: palette.gray300,
    buttonPrimaryBg: palette.primary,
    buttonPrimaryText: palette.white,
    buttonSecondaryBg: palette.gray200,
    buttonSecondaryText: palette.black,
    danger: palette.danger,
  },
  spacing: {
    none: 0,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadii: {
    none: 0,
    s: 4,
    m: 8,
    l: 16,
    xl: 24,
    full: 9999,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    header: {
      fontWeight: "bold",
      fontSize: 28,
      lineHeight: 34,
      color: "textPrimary",
    },
    subheader: {
      fontWeight: "600",
      fontSize: 20,
      lineHeight: 26,
      color: "textPrimary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: "textPrimary",
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
      color: "textSecondary",
    },
    button: {
      fontSize: 16,
      fontWeight: "600",
      color: "buttonPrimaryText",
    },
    defaults: {
      fontSize: 16,
      lineHeight: 24,
      color: "textPrimary",
    },
  },
  cardVariants: {
    defaults: {
      padding: "m",
      borderRadius: "l",
      backgroundColor: "cardBackground",
      shadowColor: "textPrimary",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
    },
    elevated: {
      padding: "m",
      borderRadius: "l",
      backgroundColor: "cardBackground",
      shadowColor: "textPrimary",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 5,
    },
    outlined: {
      padding: "m",
      borderRadius: "l",
      backgroundColor: "cardBackground",
      borderWidth: 1,
      borderColor: "border",
    },
  },
});

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.darkBg,
    cardBackground: palette.darkCardBg,
    textPrimary: palette.white,
    textSecondary: palette.gray300,
    border: palette.gray800,
    buttonPrimaryBg: palette.primary,
    buttonPrimaryText: palette.white,
    buttonSecondaryBg: palette.darkCardBg,
    buttonSecondaryText: palette.white,
  },
};
