import {
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ReactNode } from "react";
import { Box } from "./primitives";
import { useThemeStore } from "../store/themeStore";

type ScreenProps = {
  children: ReactNode;
  /**
   * Set `scrollable` to true (or `keyboardAware`) on screens containing forms or text inputs.
   * Enables KeyboardAvoidingView + ScrollView with tap-to-dismiss behavior globally.
   */
  scrollable?: boolean;
  keyboardAware?: boolean;
};

export const Screen = ({ children, scrollable, keyboardAware }: ScreenProps) => {
  const isDark = useThemeStore((s) => s.isDark);
  const isScrollable = scrollable || keyboardAware;

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
      <SafeAreaView style={styles.container}>
        {isScrollable ? (
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
              <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
              >
                {children}
              </ScrollView>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        ) : (
          children
        )}
      </SafeAreaView>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
});
