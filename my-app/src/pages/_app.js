import { Provider } from "@/components/ui/provider"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { useAnalytics } from "../lib/analytics"

export default function App({ Component, pageProps }) {
  // Hook para rastrear mudanças de página no Google Analytics
  useAnalytics();
  return (
    <Provider >
      <Component {...pageProps} />
      <SpeedInsights/>
      <Analytics/>
    </Provider>
  )
}