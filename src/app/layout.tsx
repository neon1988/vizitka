import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });
const montserrat = Montserrat({ subsets: ["latin", "cyrillic"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Олег Лаврентьев | Ведущий мероприятий",
  description: "Профессиональный ведущий для ваших особенных событий: свадьбы, юбилеи, корпоративы. Сделаю ваше мероприятие незабываемым!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
