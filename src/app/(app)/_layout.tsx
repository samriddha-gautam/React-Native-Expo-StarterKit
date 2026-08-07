import { MaterialTopTabs } from "../../components/MaterialTopTabs";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <MaterialTopTabs
        screenOptions={{
          tabBarActiveTintColor: "#208AEF",
          tabBarInactiveTintColor: "#888",
          tabBarIndicatorStyle: { backgroundColor: "#208AEF", height: 3 },
          tabBarStyle: { elevation: 2, shadowOpacity: 0.1 },
        }}
      >
        <MaterialTopTabs.Screen name="index" options={{ title: "Home" }} />
        <MaterialTopTabs.Screen name="profile/[id]" options={{ title: "Profile" }} />
      </MaterialTopTabs>
    </SafeAreaView>
  );
}
