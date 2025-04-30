"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import userStore from "@/store/user";

const usePublicRedirector = () => {
  const token = userStore((state) => state.token);
  const hasHydrated = userStore((state) => state._hasHydrated);
  const router = useRouter();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!hasHydrated) return;

    if (token) {
      router.push("/dashboard");
    } else {
      setChecked(true);
    }
  }, [hasHydrated, token, router]);

  return checked;
};

export default usePublicRedirector;
