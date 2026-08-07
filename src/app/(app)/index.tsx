import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../../context/AuthContext";

export default function HomeScreen() {
  const router = useRouter();
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen (Swipeable Tab 1)</Text>
      <Text style={styles.text}>Swipe left to view Profile tab!</Text>

      <View style={styles.spacing} />

      <Button
        title="Test Deep Link / Navigation to Profile #123"
        onPress={() => router.push("/profile/123")}
      />

      <View style={styles.spacing} />

      <Button title="Sign Out" color="#d9534f" onPress={signOut} />
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: "#555",
  },
  spacing: {
    marginVertical: 10,
  },
});
