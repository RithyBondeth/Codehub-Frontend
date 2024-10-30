import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './languages/i18n.ts' //Initialize Language
import { RouterProvider } from 'react-router-dom'
import { routers } from './routers/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={routers}/>
  </StrictMode>,
)