import { TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "./primitives";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../theme";

type ButtonProps = {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
};

export const Button = ({ label, onPress, variant = "primary", disabled }: ButtonProps) => {
  const theme = useTheme<Theme>();

  let backgroundColor = theme.colors.buttonPrimaryBg;
  let textColor = theme.colors.buttonPrimaryText;

  if (variant === "secondary") {
    backgroundColor = theme.colors.buttonSecondaryBg;
    textColor = theme.colors.buttonSecondaryText;
  } else if (variant === "danger") {
    backgroundColor = theme.colors.danger;
    textColor = theme.colors.buttonPrimaryText;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, { backgroundColor, opacity: disabled ? 0.6 : 1 }]}
    >
      <Text variant="button" style={{ color: textColor }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
