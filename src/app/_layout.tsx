import { useEffect } from "react";
import { Slot, useRouter, useSegments } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";

function RootLayoutNav() {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (!isAuthenticated && !inAuthGroup) {
      // Redirect unauthenticated users to the sign-in screen inside (auth)
      router.replace("/(auth)/sign-in");
    } else if (isAuthenticated && inAuthGroup) {
      // Redirect authenticated users away from auth screens to main app
      router.replace("/(app)");
    }
  }, [isAuthenticated, segments]);

  return <Slot />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
