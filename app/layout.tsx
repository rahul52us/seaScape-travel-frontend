'use client';

import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
} from "@chakra-ui/react";
import {
  Montserrat,
  Poppins,
  Playfair_Display,
  Dancing_Script,
} from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Script from "next/script";

import Notification from "./component/common/Notification/Notification";
import AuthenticationLayout from "./layouts/authenticationLayout/AuthenticationLayout";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout";
import MainLayout from "./layouts/mainLayout/MainLayout";
import stores from "./store/stores";

// ---------------- Fonts ----------------

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    companyStore: { getCompanyDetails },
  } = stores;

  const pathname = usePathname();

  // ---------------- Chakra Theme ----------------

  const theme = extendTheme({
    ...stores.themeStore.themeConfig,
    fonts: {
      heading: montserrat.style.fontFamily,
      body: poppins.style.fontFamily,
    },
  });

  // ---------------- Fetch Company ----------------

  useEffect(() => {
    getCompanyDetails();
  }, [getCompanyDetails]);

  // ---------------- GTM Page View ----------------

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "pageview",
        page_path: pathname,
      });
    }
  }, [pathname]);

  // ---------------- Layout ----------------

  const getLayout = () => {
    if (
      pathname === "/login" ||
      pathname === "/register" ||
      pathname === "/forgot-password" ||
      pathname === "/signUp"
    ) {
      return AuthenticationLayout;
    } else if (pathname.startsWith("/dashboard")) {
      return DashboardLayout;
    }

    return MainLayout;
  };

  const LayoutComponent = getLayout();

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event:'gtm.js'
                });
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PKR6WV8G');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        <ColorModeScript initialColorMode="light" />

        {/* SEO */}
        <title>Travel World</title>

        <meta
          name="description"
          content="Trusted international travel company in India for romantic getaways, family holidays & group tours. Customized itineraries & complete support."
        />

        <meta
          name="keywords"
          content="International tour packages from India, Best travel agency for abroad trips, Customized international holidays, Visa flights hotel packages, Family international trips, Honeymoon international trips"
        />
      </head>

      <body
        className={`
          ${montserrat.className}
          ${poppins.className}
          ${montserrat.variable}
          ${playfair.variable}
          ${dancingScript.variable}
          ${poppins.variable}
        `}
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PKR6WV8G"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ChakraProvider theme={theme}>
          <Notification />
          <LayoutComponent>{children}</LayoutComponent>
        </ChakraProvider>
      </body>
    </html>
  );
}