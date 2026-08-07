import { useRouter } from "expo-router";
import { useAuth } from "../../context/AuthContext";
import { Screen } from "../../components/Screen";
import { Box, Text } from "../../components/primitives";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { useAppTheme } from "../../context/ThemeContext";

export default function HomeScreen() {
  const router = useRouter();
  const { signOut } = useAuth();
  const { mode, toggleTheme } = useAppTheme();

  return (
    <Screen>
      <Box flex={1} padding="m" justifyContent="center">
        <Card variant="elevated" marginBottom="l">
          <Text variant="header" marginBottom="xs">
            Restyle Theming
          </Text>
          <Text variant="subheader" marginBottom="s">
            Current Theme Mode: {mode.toUpperCase()}
          </Text>
          <Text variant="body" color="textSecondary" marginBottom="m">
            This card demonstrates Restyle design tokens, Box, Text, and Card primitives.
          </Text>

          <Button
            label={`Switch to ${mode === "light" ? "Dark" : "Light"} Mode`}
            onPress={toggleTheme}
            variant="secondary"
          />
        </Card>

        <Card variant="outlined" marginBottom="l">
          <Text variant="subheader" marginBottom="s">
            Navigation Test
          </Text>
          <Button
            label="Open Profile #123"
            onPress={() => router.push("/profile/123")}
            variant="primary"
          />
        </Card>

        <Button label="Sign Out" onPress={signOut} variant="danger" />
      </Box>
    </Screen>
  );
}
