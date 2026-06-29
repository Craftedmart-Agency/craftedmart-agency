import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingProvider from "./providers/LoadingProvider";
import { AuthProvider } from "./context/AuthContext";
import { ModalProvider } from "./components/Modal/ModalProvider";
import WhatsAppButton from './components/WhatsappButton';
export const metadata: Metadata = {
  title: "Craftedmart Agency",
  description:
    "Craftedmart Agency provides web development, UI/UX design, branding, and SEO services to help businesses grow with modern, high-performing websites.",
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
      <head>
        {/* LCP Image Preload */}
        <link
          rel="preload"
          as="image"
          href="/banner.png" // your live image site path
          fetchPriority="high"
        />
      </head>
      <GoogleTagManager gtmId="GTM-PPRWMG8N" />
      <body
        className={`${poppins.className} antialiased mt-24 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat bg-fixed top-6 z-20`}
      >
        <AuthProvider>
          <ModalProvider>
            <LoadingProvider>
              <Navbar />
              <main>{children}</main>
              <WhatsAppButton />
              <Footer />
            </LoadingProvider>
          </ModalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
