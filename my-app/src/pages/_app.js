import { Provider } from "@/components/ui/provider"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export default function App({ Component, pageProps }) {
  return (
    <Provider >
      <Component {...pageProps} />
      <SpeedInsights/>
      <Analytics/>
    </Provider>
  )
}