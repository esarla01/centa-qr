"use client";

import { Header } from "@/components/header";
import Image from "next/image";
import React from "react";
import { useTranslation } from "@/node_modules/react-i18next";
import { useSearchParams } from "next/navigation";

export default function FaultReporting() {
  const { t } = useTranslation();
    
  const baseBtn =
    "contact-btn flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-4 rounded-xl shadow transition hover:text-white font-medium text-sm sm:text-base md:text-lg justify-center w-full max-w-xs sm:max-w-sm md:max-w-md";

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 text-center space-y-6 sm:space-y-8 md:space-y-10">
      <Header />

      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Centa Logo"
        width={150}
        height={70}
        className="object-contain py-4 sm:py-6"
      />

      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
        {t("title")}
      </h1>

      {/* Phone */}
      <button
        onClick={() => {
          if (typeof window !== "undefined" && window.innerWidth < 768) {
            window.location.href = "tel:+905332759180";
          }
        }}
        className={`${baseBtn} bg-yellow-100 hover:bg-yellow-600 text-black`}
      >
        <Image src="/phone.png" alt="Phone" width={20} height={20} />
        {t("callBtn")}
      </button>

      {/* WhatsApp */}
      <button
        onClick={() =>
          window.open(
            "https://api.whatsapp.com/send/?phone=905332758170&text&type=phone_number&app_absent=0",
            "_blank"
          )
        }
        className={`${baseBtn} bg-green-100 hover:bg-green-600 text-black`}
      >
        <Image src="/whatsapp.png" alt="WhatsApp" width={20} height={20} />
        {t("whatsappBtn")}
      </button>

      {/* Email */}
      <button
        onClick={() => (window.location.href = "mailto:info@centa.com.tr")}
        className={`${baseBtn} bg-blue-100 hover:bg-blue-500 text-black`}
      >
        <Image src="/email.png" alt="Email" width={20} height={20} />
        {t("emailBtn")}
      </button>

      {/* Helper text */}
      <p className="max-w-xs sm:max-w-sm md:max-w-md text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed px-2">
        {t("helperText")}
      </p>
    </div>
  );
}
