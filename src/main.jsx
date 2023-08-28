import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "././components/hero/Hero.css"
import "./components/beforefooter/BeforeFooter.css"
import "./css/Styles.css"
import { ThemeProvider } from '@material-tailwind/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
