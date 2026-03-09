import { Provider } from "@/components/ui/provider"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { useAnalytics, GA_TRACKING_ID } from "../lib/analytics"
import Script from "next/script"
import { Poppins } from "next/font/google"
import dynamic from "next/dynamic"

const CookieConsent = dynamic(() => import("@/components/CookieConsent"), {
  ssr: false,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }) {
  // Hook para rastrear mudanças de página no Google Analytics
  useAnalytics();
  return (
    <div className={poppins.variable} style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
      <Provider>
        {/* Google Analytics - non-blocking */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_title: document.title,
              send_page_view: true
            });
          `}
        </Script>
        <Component {...pageProps} />
        <CookieConsent />
        <SpeedInsights/>
        <Analytics/>
      </Provider>
    </div>
  )
}