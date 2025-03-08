import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NatoursApp from './Natours/Natours.tsx'
import Trillo from './Trillo/Trillo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Trillo />
    {/* <NatoursApp /> */}
  </StrictMode>,
)
