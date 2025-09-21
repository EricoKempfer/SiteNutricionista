import { Provider } from "@/components/ui/provider"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App({ Component, pageProps }) {
  return (
    <Provider >
      <Component {...pageProps} />
      <SpeedInsights/>
    </Provider>
  )
}