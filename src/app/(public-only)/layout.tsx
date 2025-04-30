"use client";
import usePublicRedirector from "@/hooks/auth/use-public-redirector";

import { ReactNode } from "react";

type Props = { children: ReactNode };

const PublicOnlyLayout = ({ children }: Props) => {
  const isGuest = usePublicRedirector();
  if (!isGuest) return null;

  return <>{children}</>;
};

export default PublicOnlyLayout;
