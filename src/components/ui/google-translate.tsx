"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useState } from "react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "hi", label: "हिंदी", flag: "🇮🇳" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
];

export function GoogleTranslate() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(LANGUAGES[0]);

  // Load Google Translate
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: LANGUAGES.map((l) => l.code).join(","),
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  const changeLanguage = (langCode: string, langData: any) => {
    const select = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;

    if (!select) return;

    select.value = langCode;
    select.dispatchEvent(new Event("change"));
    setSelected(langData);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Hidden Google Widget */}
      <div
        id="google_translate_element"
        style={{ display: "none" }}
      ></div>

      {/* Custom Dropdown Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1 border rounded bg-white shadow-sm hover:bg-gray-50"
      >
        <span className="text-lg">{selected.flag}</span>
        <span>{selected.label}</span>
        <span>▾</span>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute left-0 mt-1 w-44 bg-white border rounded shadow-lg z-50">
          {LANGUAGES.map((lang) => (
            <div
              key={lang.code}
              onClick={() => changeLanguage(lang.code, lang)}
              className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Google Script */}
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="lazyOnload"
      />

      {/* Remove Google default UI */}
      <style jsx global>{`
        .goog-te-gadget-icon {
          display: none !important;
        }
        .goog-te-menu-value {
          display: none !important;
        }
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
      `}</style>
    </div>
  );
}
