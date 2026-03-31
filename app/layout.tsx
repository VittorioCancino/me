import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@lib/i18n/context";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "Vittorio Cancino",
  description: "Personal page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <div className="fixed top-4 right-4 z-50">
            <LanguageToggle />
          </div>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
