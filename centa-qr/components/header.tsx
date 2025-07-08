"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useTranslation } from "@/node_modules/react-i18next";

type HeaderProps = {
  backUrl?: string; 
  showBackButton?: boolean;
};

export const Header = ({ backUrl,  showBackButton = true }: HeaderProps) => {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;

    // Save selection in a cookie
    document.cookie = `i18next=${selectedLang}; path=/`;

    // Tell i18n to change the language
    i18n.changeLanguage(selectedLang);
  };

  return (
    // inside Header component
    <div className="absolute top-6 inset-x-4  z-50 flex justify-between items-center">
      {showBackButton ? (
        <button
            onClick={() => {
              if(backUrl) {
                router.push(backUrl); 
              } else {
                router.back();
              }                  
            }} 
          className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-100 transition flex items-center gap-1"
        >
          <FaArrowLeftLong className="text-gray-600 text-lg" />
          <span className="text-gray-700 text-sm font-medium">{t("back")}</span>
        </button>
      ) : (
        <div className="w-[96px]" />
      )}

      <select
        value={i18n.language} // no need to use separate state
        onChange={handleLangChange}
        className="bg-gray-200 border border-gray-300 rounded-lg px-2 py-2 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="tr">Türkçe</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};
