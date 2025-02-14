import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NatoursApp from './Natours/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NatoursApp />
  </StrictMode>,
)
