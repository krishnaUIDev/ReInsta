import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

injectGlobal`
 @font-face {
     font-family: 'Pacifico',
     src: url('https://fonts.googleapis.com/css?family=Pacifico');
 }
 
`

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
