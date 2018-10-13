//this is the core file that will display the app 
//it connects to App.js via the ID named 'root'
import React from 'react'
import {render} from 'react-dom'
import App from './components/App'

render(<App />, document.getElementById('root'))