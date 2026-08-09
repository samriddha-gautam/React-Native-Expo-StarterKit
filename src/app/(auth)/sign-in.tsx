import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../../store/authStore";
import { Screen } from "../../components/Screen";
import { Box, Text } from "../../components/primitives";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";
import {
  signInSchema,
  signUpSchema,
  SignInFormValues,
  SignUpFormValues,
} from "../../lib/schemas/authSchemas";

export default function SignInScreen() {
  const signIn = useAuthStore((s) => s.signIn);
  const [isSignUp, setIsSignUp] = useState(false);

  // Sign In Form
  const signInForm = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Sign Up Form
  const signUpForm = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSignInSubmit = (data: SignInFormValues) => {
    console.log("Sign In Success:", data);
    signIn();
  };

  const onSignUpSubmit = (data: SignUpFormValues) => {
    console.log("Sign Up Success:", data);
    signIn();
  };

  return (
    <Screen keyboardAware>
      <Box flex={1} padding="m" justifyContent="center">
        <Card variant="elevated">
          <Text variant="header" marginBottom="xs">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </Text>
          <Text variant="body" color="textSecondary" marginBottom="l">
            {isSignUp ? "Sign up with React Hook Form & Zod" : "Sign in with React Hook Form & Zod"}
          </Text>

          {isSignUp ? (
            /* Sign Up Form */
            <>
              <FormInput
                control={signUpForm.control}
                name="name"
                label="Full Name"
                placeholder="Enter your name"
                autoCapitalize="words"
              />
              <FormInput
                control={signUpForm.control}
                name="email"
                label="Email Address"
                placeholder="email@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <FormInput
                control={signUpForm.control}
                name="password"
                label="Password"
                placeholder="At least 8 chars (1 upper, 1 number)"
                secureTextEntry
              />
              <FormInput
                control={signUpForm.control}
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Re-enter password"
                secureTextEntry
              />
              <Button
                label="Sign Up"
                onPress={signUpForm.handleSubmit(onSignUpSubmit)}
                variant="primary"
              />
            </>
          ) : (
            /* Sign In Form */
            <>
              <FormInput
                control={signInForm.control}
                name="email"
                label="Email Address"
                placeholder="email@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <FormInput
                control={signInForm.control}
                name="password"
                label="Password"
                placeholder="Enter password"
                secureTextEntry
              />
              <Button
                label="Sign In"
                onPress={signInForm.handleSubmit(onSignInSubmit)}
                variant="primary"
              />
            </>
          )}

          <Box marginTop="m" alignItems="center">
            <Button
              label={isSignUp ? "Already have an account? Sign In" : "Need an account? Sign Up"}
              onPress={() => {
                signInForm.reset();
                signUpForm.reset();
                setIsSignUp(!isSignUp);
              }}
              variant="secondary"
            />
          </Box>
        </Card>
      </Box>
    </Screen>
  );
}
