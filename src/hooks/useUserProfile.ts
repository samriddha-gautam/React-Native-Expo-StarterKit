import { useQuery } from "@tanstack/react-query";

export type UserProfile = {
  id: string;
  name: string;
  email: string;
};

// Example query function for fetching user profile (Server State)
const fetchUserProfile = async (userId: string): Promise<UserProfile> => {
  // Simulate network request delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    id: userId,
    name: "John Doe",
    email: "john.doe@example.com",
  };
};

export const useUserProfile = (userId: string) => {
  return useQuery({
    queryKey: ["userProfile", userId],
    queryFn: () => fetchUserProfile(userId),
    enabled: Boolean(userId),
  });
};
