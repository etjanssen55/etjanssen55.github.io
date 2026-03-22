import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { SectionControlProvider } from './contexts/SectionControlContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SectionControlProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </SectionControlProvider>
  </StrictMode>
)
