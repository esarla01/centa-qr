import i18n from "i18next";
import { initReactI18next } from "@/node_modules/react-i18next";
import LanguageDetector from "i18next-browser-languagedetector/cjs";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "tr",
    debug: false,
    interpolation: {
      escapeValue: false, // React already escapes
    },
    resources: {
      tr: {
        translation: {
          welcome: "Centa Asansör Destek’e Hoş Geldiniz",
          back: "Geri",
          welcome_page: "Centa bileşenlerini kullanmanız, kurmanız ve bakımını yapmanız için rehberiniz. Sorunsuz ve güvenilir bir deneyim için etkileşim kılavuzlarına, kurulum eğitimine veya teknik desteğe erişin.",
          select_product: "Talimat kılavuzunu görüntülemek için lütfen bir kategori seçin.",
          continue: "Devam Et",
          door_detectors: "Fotosel",
          overload_systems: "Aşırı Yük",        
          instruction_manuals: "📖 Kullanma Kılavuzları",
          installation_trainings: "🎓 Montaj Eğitimleri",
          technical_support: "🛠️ Teknik Destek",
          title: "Destek ve İletişim",
          callBtn: "Bizi arayın: +90 533 275 9180",
          whatsappBtn: "WhatsApp üzerinden bize ulaşın",
          emailBtn: "E-posta: info@centa.com.tr",
          helperText: "Yukarıdaki butonlara tıklayarak bizimle iletişime geçebilirsiniz. Uluslararası kullanıcılarımızın e-posta veya WhatsApp üzerinden ulaşmalarını rica ederiz.",
          tutorials: "Eğitim ve Kurulum Videoları",
          needHelp: "Ek desteğe mi ihtiyacınız var? Destek ekibimizle her zaman iletişime geçebilirsiniz."
        },
      },
      en: {
        translation: {
          welcome: "Welcome to Centa Elevator Support",
          back: "Back",
          welcome_page: "Your guide to operating, installing, and maintaining Centa components. Access interaction manuals, installation training, or get technical support to ensure a smooth and reliable experience.",
          select_product: "Please choose a category to view its instruction manual.",
          continue: "Continue",
          door_detectors: "Door Detectors",
          overload_systems: "Overload Sensors",
          instruction_manuals: "📖 Instruction Manuals",
          installation_trainings: "🎓 Installation Trainings",
          technical_support: "🛠️ Technical Support",
          title: "Support and Contact",
          callBtn: "Call us at +90 533 275 9180",
          whatsappBtn: "Message us on WhatsApp",
          emailBtn: "E-mail info@centa.com.tr",
          helperText: "You can reach us through any of the platforms below. If you're an international user, please contact us via email or WhatsApp.",
          tutorials: "Training and Installation Videos",
          needHelp: "Need more help? Contact our support team any time."
        },
      },
    },
    detection: {
      order: ["cookie"],
      caches: ["cookie"],
    },
  });

export default i18n;
