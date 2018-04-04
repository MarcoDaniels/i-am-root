import * as React from 'react'
import './App.css'
import { Project } from './Project'
import { Header } from './Header'
import { Prompt } from './Prompt'

export const App = () =>
    <div>
        <Header/>
        <Prompt/>
        <Project projectName={'joyful'}/>
    </div>
