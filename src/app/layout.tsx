import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingProvider from "./providers/LoadingProvider";
import { AuthProvider } from "./context/AuthContext";
import { ModalProvider } from "./components/Modal/ModalProvider";
import WhatsAppButton from './components/WhatsappButton';
import { SpeedInsights } from '@vercel/speed-insights/next';
export const metadata: Metadata = {
  title: "Craftedmart Agency",
  description:
    "CraftedMart Agency – Web, Branding & Digital Solutions",
  icons: {
    icon: "/logo.png",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${poppins.className} antialiased pt-16 md:pt-24 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat bg-fixed z-20`}
        className={`${poppins.className} antialiased mt-24 bg-black`}
      >
        <AuthProvider>
          <ModalProvider>
            <LoadingProvider>
              <Navbar />
              <main>{children}</main>
              <WhatsAppButton/>
              <Footer />
            </LoadingProvider>
          </ModalProvider>
        </AuthProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
