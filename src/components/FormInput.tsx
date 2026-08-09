import { TextInput, TextInputProps, StyleSheet } from "react-native";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { Box, Text } from "./primitives";
import { useThemeStore } from "../store/themeStore";

type FormInputProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = {
  control: Control<TFieldValues>;
  name: TName;
  label: string;
} & Omit<TextInputProps, "value" | "onChangeText" | "onBlur">;

export function FormInput<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  control,
  name,
  label,
  secureTextEntry,
  ...props
}: FormInputProps<TFieldValues, TName>) {
  const isDark = useThemeStore((s) => s.isDark);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
        const hasError = Boolean(error?.message);

        return (
          <Box marginBottom="m">
            <Text variant="caption" marginBottom="xs" color={hasError ? "danger" : "textSecondary"}>
              {label}
            </Text>

            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: isDark ? "#1E2638" : "#FFFFFF",
                  borderColor: hasError ? "#FF3B30" : isDark ? "#343A40" : "#DEE2E6",
                  color: isDark ? "#FFFFFF" : "#0B0E14",
                },
              ]}
              value={value ?? ""}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={secureTextEntry}
              placeholderTextColor={isDark ? "#DEE2E6" : "#6C757D"}
              {...props}
            />

            {hasError ? (
              <Text variant="caption" color="danger" marginTop="xs">
                {error?.message}
              </Text>
            ) : null}
          </Box>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
});
