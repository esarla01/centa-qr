// I18nProvider.tsx
"use client";
import { useEffect, useState } from "react";
import { I18nextProvider } from "@/node_modules/react-i18next";
import i18n from "../lib/i18n";

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const cookieLang = document.cookie
      .split("; ")
      .find((row) => row.startsWith("i18next="))
      ?.split("=")[1];

    const defaultLang = cookieLang || "tr";

    if (i18n.language !== defaultLang) {
      i18n.changeLanguage(defaultLang);
    }

    setMounted(true); 
  }, []);

  if (!mounted) return null; 

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
