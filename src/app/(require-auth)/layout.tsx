"use client";
import usePrivateRedirector from "@/hooks/auth/use-private-redirector";
import { ReactNode } from "react";

type Props = { children: ReactNode };

const AuthLayout = ({ children }: Props) => {
  const isAuthed = usePrivateRedirector();
  if (!isAuthed) return null;
  return <>{children}</>;
};

export default AuthLayout;
