import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lipsticks from './components/Lipsticks.jsx'
import Kitchen from './components/Kitchen.jsx'
import Dresses from './components/Dresses.jsx'
import Oils from './components/Oils.jsx'
import Perfumes from './components/Perfumes.jsx'
import Master from './components/Master.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Master />
  </StrictMode>,
)
