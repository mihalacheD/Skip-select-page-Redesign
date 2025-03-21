import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools }from '@tanstack/react-query-devtools'
import { ThemeProvider } from "next-themes"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/index.css'
import App from './App'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ChakraProvider value={defaultSystem}>
     <ThemeProvider attribute="class" disableTransitionOnChange>
     <QueryClientProvider client={queryClient}>
       <App />
       <ReactQueryDevtools/>
     </QueryClientProvider>
    </ThemeProvider>
   </ChakraProvider>
  </StrictMode>,
)
