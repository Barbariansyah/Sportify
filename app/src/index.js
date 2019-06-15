import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './GlobalStyle'
import { StylesProvider } from '@material-ui/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import './index.css'
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StylesProvider injectFirst>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <GlobalStyle />
      <App />
    </MuiPickersUtilsProvider>
  </StylesProvider>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
