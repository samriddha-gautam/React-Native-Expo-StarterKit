import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ProfileScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen (Swipeable Tab 2)</Text>
      <Text style={styles.paramText}>
        User ID Parameter: <Text style={styles.bold}>{id || "Default (Swipe)"}</Text>
      </Text>
      <Text style={styles.subtext}>Try opening deep link: myapp://profile/999</Text>
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
    marginBottom: 12,
  },
  paramText: {
    fontSize: 16,
    marginBottom: 8,
  },
  bold: {
    fontWeight: "bold",
    color: "#208AEF",
  },
  subtext: {
    fontSize: 12,
    color: "#888",
    marginTop: 10,
  },
});
