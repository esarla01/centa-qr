"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/header";
import { useTranslation } from "@/node_modules/react-i18next";

export default function ProductPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [subcategory, setSubcategory] = useState<string | null>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const type = useSearchParams().get("type")?.toLowerCase() || "";

  const options: Record<string, string[]> = {
    "door_detectors": [
      "door_sensors",
      "point_detectors",
      "control_units",
    ],
    "overload_systems": [
      "under_cabin_overload_systems",
      "rope_overload_systems",
      "overload_systems_control_units"
    ]
  };

  const validTypes = Object.keys(options);

  useEffect(() => {
    if (!validTypes.includes(type)) {
      router.push("/"); 
    }
  }, [type]);

  if (!validTypes.includes(type)) {
    return <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white"> </div>
  }
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (productRef.current?.contains(target)) return;
      if ((target as HTMLElement).closest("[data-ignore-click]")) return;
      setSubcategory(null);
    };

    if (subcategory) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [subcategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center px-4 text-center">
      <Header backUrl="/" />

      <div className="relative max-w-sm w-full p-8 text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Centa Logo"
            width={200}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-gray-700 text-lg font-medium">
          {t(`product_title_${type}`) || "Ürün tipi bulunamadı"}
        </h1>

        {/* Action Buttons */}
        <div ref={productRef} className="space-y-4">
          {(options[type] || []).map((action, index) => (
            <button
              key={index}
              onClick={() => setSubcategory(action)}
              className={`w-full bg-gray-200 rounded-xl py-5 text-lg font-medium border-2  hover:bg-gray-300 transition ${
                subcategory === action ? "border-gray-700" : "border-transparent"
              }`}
            >
              {t(action)}
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <div className="pt-4 h-14 flex justify-center items-center">
        {subcategory && (
            <button
              onClick={() =>
                router.push(
                  `/subcategory?type=${type}&subcategory=${subcategory}`
                )
              }
              data-ignore-click
              className="bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold"
            >
              {t("continue")}
            </button>
        )}
        </div>


        {/* Footer */}
        <footer className="mt-10 text-sm text-gray-400">
          Centa Elevator © 2025 • v1.0
        </footer>
      </div>
    </div>
  );
}
