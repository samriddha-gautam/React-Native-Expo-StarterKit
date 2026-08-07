import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { ReactNode } from "react";
import { Box } from "./primitives";
import { useAppTheme } from "../context/ThemeContext";

type ScreenProps = {
  children: ReactNode;
};

export const Screen = ({ children }: ScreenProps) => {
  const { isDark } = useAppTheme();

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
