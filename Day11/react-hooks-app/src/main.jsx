import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' 
import ImageEditor from './components/ImageEditor.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImageEditor/>
    {/* <App /> */}
  </StrictMode>,
)
