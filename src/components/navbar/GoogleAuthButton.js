import { Button } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";
import { signInWithGoogle } from "../../firebase";
import { apiAuthWithGoogle } from "../../api";

export default function GoogleAuthButton({ onClose, authTrigger, setError }) {
  const [isLoading, setIsLoading] = useState(false);
  const authWithGoogle = async () => {
    const firebaseResponse = await signInWithGoogle();
    const { email, displayName, accessToken } = firebaseResponse;
    try {
      setIsLoading(true);
      const response = await apiAuthWithGoogle({
        email: email,
        fullName: displayName,
        token: accessToken,
      });
      const newToken = response.data?.data.token; //TODO
      localStorage.setItem("USER_TOKEN", newToken);
      localStorage.setItem("AUTH_METHOD", "GOOGLE");

      window.location.reload();
      onClose();
    } catch (e) {
      console.log("ERROR", e);
      setError("Fail to log in! Please check your data.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      variant="outline"
      colorScheme="gray"
      leftIcon={<FcGoogle />}
      borderRadius="full"
      onClick={authWithGoogle}
      isLoading={isLoading}
    >
      Log in with Google
    </Button>
  );
}
