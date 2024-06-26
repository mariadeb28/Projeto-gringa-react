import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './containers/Home'
import GlobalStyles from './styles/globalStyles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>,
)
