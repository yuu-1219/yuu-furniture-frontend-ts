import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'

import { CartProvider } from './contexts/CartContext'
import { UserProvider } from './contexts/UserContext.jsx'

createRoot(document.getElementById('root')!).render(
<StrictMode>
    <UserProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UserProvider>
  </StrictMode>,
)
