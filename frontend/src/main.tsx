import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomePage } from './components/pages/homepage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div style={{backgroundColor: '#F2F4F5'}}>
      <HomePage />  
    </div>
  </React.StrictMode>,
)
