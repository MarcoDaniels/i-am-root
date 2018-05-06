import './Styles/skeleton.css'
import './Styles/normalize.css'
import './Styles/main.css'
import * as React from 'react'
import Header from './Components/Header'
import Prompt from './Components/Prompt'

export const App = () =>
    <div className="app">
        <Header/>
        <Prompt/>
    </div>
