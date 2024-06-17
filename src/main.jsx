import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SearchBox from './search_box/SearchBox.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <SearchBox/>
  </React.StrictMode>,
)
