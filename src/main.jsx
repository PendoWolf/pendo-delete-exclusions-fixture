import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Boot Pendo once with an anonymous visitor. An empty id lets the SDK reuse a
// previously stored visitor id, or fall back to a new anonymous visitor.
window.pendo.initialize({
  visitor: {
    id: '',
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
