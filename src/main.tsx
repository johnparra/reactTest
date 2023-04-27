import React from 'react'
import ReactDOM from 'react-dom/client'

import { SearchAnimalsApp } from './SearchAnimalsApp'

import './styles.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SearchAnimalsApp></SearchAnimalsApp>
  </React.StrictMode>,
)
