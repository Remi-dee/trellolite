import Modal from "@/components/Modal";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trello-lite",
  description: "Generated by Remi Daniel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[url('../public/assets/wood.jpg')] bg-contain">
        
        <Modal />
        {children}
      </body>
    </html>
  );
}
