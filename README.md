# 📘 Centa Instruction Manual App

This is a lightweight, mobile-friendly web app for **Centa Elevator**, designed to help users easily access:
✅ Instruction manuals
✅ Installation training
✅ Technical support

Built with:

* 🖥️ **Next.js App Router**
* 🎨 **Tailwind CSS**
* 🌐 **react-i18next** for localization

---

## 🚀 Features

* 📱 **Responsive design**

  * Optimized for both mobile and desktop screens.
* 🌐 **Multi-language support**

  * Powered by `react-i18next`.
* 📄 **Direct PDF manuals**

  * Manuals are stored in `/public` and opened directly in the browser.
* 🎥 **Training videos**

  * Embedded YouTube tutorials for installation and usage.
* ☎️ **Quick contact options**

  * Users can call, WhatsApp, or email support easily.

---

## 📂 Project Structure

```
/public
  └── Static assets & PDF manuals
      ├── door-detectors.pdf
      ├── overload-manual.pdf

/app
  └── Main application pages
      └── Uses Next.js App Router

/components
  └── Reusable components
      ├── Header.tsx
      ├── I18nProvider.tsx
```
