"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import userStore from "@/store/user";

const useHomeRedirector = () => {
  const token = userStore((state) => state.token);
  const hasHydrated = userStore((state) => state._hasHydrated);
  const router = useRouter();

  useEffect(() => {
    if (!hasHydrated) return;

    if (token) {
      router.replace("/dashboard");
    } else {
      router.replace("/login");
    }
  }, [hasHydrated, token, router]);
};

export default useHomeRedirector;
