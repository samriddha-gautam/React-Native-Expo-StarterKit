import { useLocalSearchParams } from "expo-router";
import { Screen } from "../../../components/Screen";
import { Box, Text } from "../../../components/primitives";
import { Card } from "../../../components/Card";

export default function ProfileScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();

  return (
    <Screen>
      <Box flex={1} padding="m" justifyContent="center">
        <Card variant="elevated">
          <Text variant="header" marginBottom="s">
            Profile Screen
          </Text>
          <Text variant="body" marginBottom="s">
            User ID Parameter:{" "}
            <Text variant="body" fontWeight="bold" color="primary">
              {id || "Default (Swipe)"}
            </Text>
          </Text>
          <Text variant="caption">Try opening deep link: myapp://profile/999</Text>
        </Card>
      </Box>
    </Screen>
  );
}
