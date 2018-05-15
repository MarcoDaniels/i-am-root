import './Styles/skeleton.css'
import './Styles/normalize.css'
import './Styles/main.css'
import * as React from 'react'
import Header from './Components/Header'
import CLI from './Components/CLI'

export const App = () =>
    <div className="app">
        <Header/>
        <CLI/>
    </div>
