import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Kitchens - Кухни на заказ премиум-класса",
  description: "Производство кухонь на заказ премиум-класса. Индивидуальный дизайн, качественные материалы, монтаж под ключ. Гарантия 5 лет.",
  keywords: "кухни на заказ, кухни премиум класса, модульные кухни, угловые кухни, производство кухонь",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
