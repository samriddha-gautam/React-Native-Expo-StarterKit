import { useAuth } from "../../context/AuthContext";
import { Screen } from "../../components/Screen";
import { Box, Text } from "../../components/primitives";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";

export default function SignInScreen() {
  const { signIn } = useAuth();

  return (
    <Screen>
      <Box flex={1} padding="m" justifyContent="center">
        <Card variant="elevated">
          <Text variant="header" marginBottom="xs">
            Sign In Screen
          </Text>
          <Text variant="body" color="textSecondary" marginBottom="l">
            Auth-Gated Route Demo
          </Text>
          <Button label="Sign In" onPress={signIn} variant="primary" />
        </Card>
      </Box>
    </Screen>
  );
}
