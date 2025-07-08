"use client";

import { Header } from "@/components/header";
import React from "react";
import { useTranslation } from "@/node_modules/react-i18next";

/** Tailwind helper for a 16:9 responsive YouTube iframe */
const YouTubeEmbed = ({ id, title }: { id: string; title: string }) => (
  <div className="w-full sm:w-3/5 md:w-2/4 mx-auto overflow-hidden rounded-lg shadow"> 
    <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2">
      {title}
    </h2>
    <div className="relative pb-[56.25%]">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
);

export default function TutorialVideos() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center px-4 sm:px-6 md:px-12 text-center">
      {/* Header */}
      <div className="p-8 sm:p-10">
        <Header />
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl px-2 sm:px-4 space-y-4 sm:space-y-6">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 my-4">
          {t("tutorials")}
        </h1>

        {/* Scrollable Video Section */}
        <div className="max-h-[70vh] overflow-y-auto space-y-4 pr-1 sm:pr-2">
            <YouTubeEmbed id="dQw4w9WgXcQ" title="Video Title 1" />
            <YouTubeEmbed id="_fw5GJdAbLY" title="Video Title 2" />
            <YouTubeEmbed id="HdlkMbJG11g" title="Video Title 3" />
            {/* Add more if needed */}
        </div>

        <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-4">
          {t("needHelp")}
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-6 text-xs sm:text-sm text-gray-400">
        Centa Elevator © 2025 • v1.0
      </footer>
    </div>
  );
}
