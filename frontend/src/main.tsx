import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomePage } from './components/pages/homepage'
import { App } from '../../megak/App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    <React.StrictMode>
        <BrowserRouter>
            <HomePage />
            {/* <App/> */}
        </BrowserRouter>
    </React.StrictMode>
)