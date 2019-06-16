import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './GlobalStyle'
import { StylesProvider } from '@material-ui/styles'
import axios from 'axios'
import './index.css'
// import * as serviceWorker from './serviceWorker';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

ReactDOM.render(
  <StylesProvider injectFirst>
    <GlobalStyle />
    <App />
  </StylesProvider>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
