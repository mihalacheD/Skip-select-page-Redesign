import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from "next-themes"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/index.css'
import App from './App'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <QueryClientProvider client={queryClient}>
   <ChakraProvider value={defaultSystem}>
     <ThemeProvider attribute="class" disableTransitionOnChange>
       <App />
     </ThemeProvider>
    </ChakraProvider>
   </QueryClientProvider>
  </StrictMode>,
)
