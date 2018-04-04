import * as React from 'react'
import './App.css'
import { Project } from './Project'
import { Header } from './Header'

export const App = () =>
    <div>
        <Header/>
        <Project projectName={'joyful'}/>
    </div>
