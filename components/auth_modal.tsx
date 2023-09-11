"use client";

import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";

import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";

import Model from "./modal";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModel from "@/hooks/useAuthModal";
import { useEffect } from "react";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModel();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, []);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <Model
      title="Welcome back"
      description="Login to your Account"
      isOpen={isOpen}
      onChange={() => {}}
    >
      {" "}
      <Auth
        theme="dark"
        magicLink
        providers={["github"]}
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#22c55e",
              },
            },
          },
        }}
      />
    </Model>
  );
};

export default AuthModal;
