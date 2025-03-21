import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/index.css'
import App from './App'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ChakraProvider value={defaultSystem}>
     <ThemeProvider attribute="class" disableTransitionOnChange>
      <App />
    </ThemeProvider>
   </ChakraProvider>
  </StrictMode>,
)
