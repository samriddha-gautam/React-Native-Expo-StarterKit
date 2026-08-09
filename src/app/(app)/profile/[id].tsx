import { useLocalSearchParams } from "expo-router";
import { Screen } from "../../../components/Screen";
import { Box, Text } from "../../../components/primitives";
import { Card } from "../../../components/Card";
import { useUserProfile } from "../../../hooks/useUserProfile";

export default function ProfileScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const userId = id || "123";
  const { data: user, isLoading, error } = useUserProfile(userId);

  return (
    <Screen>
      <Box flex={1} padding="m" justifyContent="center">
        <Card variant="elevated">
          <Text variant="header" marginBottom="s">
            Profile Screen (Server State)
          </Text>
          <Text variant="body" marginBottom="s">
            User ID Parameter:{" "}
            <Text variant="body" fontWeight="bold" color="primary">
              {userId}
            </Text>
          </Text>

          {isLoading && (
            <Text variant="body" color="textSecondary">
              Loading profile from TanStack Query...
            </Text>
          )}

          {error && (
            <Text variant="body" color="danger">
              Failed to load profile.
            </Text>
          )}

          {user && (
            <Box marginTop="s" padding="s" borderRadius="m" backgroundColor="mainBackground">
              <Text variant="subheader">{user.name}</Text>
              <Text variant="caption">{user.email}</Text>
            </Box>
          )}

          <Box marginTop="l">
            <Text variant="caption">Try opening deep link: myapp://profile/999</Text>
          </Box>
        </Card>
      </Box>
    </Screen>
  );
}
