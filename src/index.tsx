import React from "react"
import ReactDOM from "react-dom/client"
import BaliBot from "./components/BaliBot/BaliBot.tsx"
import "./index.css"
import BinanceProvider from "./providers/BinanceProvider.tsx"
import GeneralProvider from "./providers/GeneralProvider.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GeneralProvider>
      <BinanceProvider>
        <BaliBot />
      </BinanceProvider>
    </GeneralProvider>
  </React.StrictMode>
)
