"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/node_modules/react-i18next";
import { Header } from "@/components/header";
import I18nProvider from "@/components/I18nProvider";

export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();
  const [type, setType] = useState<string | null>(null);
  const productRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (productRef.current?.contains(target)) return;
      if ((target as HTMLElement).closest("[data-ignore-click]")) return;

      setType(null);
      router.push('/instruction_manuals'); // Navigate back to the original URL
    };
    if (type) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [type, router]);

  const renderProductButton = (label: string) => (
    <button
      onClick={() => setType(label)}
      className={`w-full text-gray-800 bg-gray-200 rounded-xl py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium border-2 hover:bg-gray-300 transition ${
        type === label ? "border-gray-700" : "border-transparent"
      }`}
    >
      {t(label.toLowerCase())}
    </button>
  );

  return (
    <I18nProvider>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 text-center">
        <Header />

        <div className="max-w-xs sm:max-w-sm md:max-w-md w-full p-6 sm:p-8 rounded-xl text-center space-y-5 sm:space-y-7">
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Centa Logo"
              width={150}
              height={70}
              className="object-contain bg-transparent"
            />
          </div>

          {/* Welcome Message */}
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">{t("instruction_manuals")}</h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700">{t("select_product")}</p>

          {/* Product Selection */}
          <div ref={productRef} className="space-y-3 sm:space-y-4">
            {renderProductButton("door_detectors")}
            {renderProductButton("overload_systems")}
          </div>

          {/* Continue Button */}
          <div className="pt-4 h-12 flex justify-center items-center">
            {type && (
              <button
              onClick={() => {
                  // Map type to actual PDF file name
                  const pdfMap: Record<string, string> = {
                    door_detectors: "/door-detector-manual.pdf",
                    overload_systems: "/overload-manual.pdf",
                  };
                  const pdfUrl = pdfMap[type] || "/"; // fallback if needed
                  window.open(pdfUrl, "_blank"); // open PDF in new tab
                }}
                data-ignore-click
                className="bg-gray-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-semibold text-sm sm:text-base"
              >
                {t("continue")}
              </button>
            )}
          </div>

          {/* Footer */}
          <footer className="mt-8 text-xs sm:text-sm text-gray-400">
            Centa Elevator © 2025 • v1.0
          </footer>
        </div>
      </div>
    </I18nProvider>
  );
}
