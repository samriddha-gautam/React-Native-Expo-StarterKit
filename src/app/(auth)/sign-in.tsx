import { View, Text, Button, StyleSheet } from "react-native";
import { useAuth } from "../../context/AuthContext";

export default function SignInScreen() {
  const { signIn } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In Screen</Text>
      <Text style={styles.subtitle}>Auth-Gated Route Demo</Text>
      <Button title="Sign In" onPress={signIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
});
