import * as React from 'react'
import './App.css'
import { Root } from './Root/Root'
import { Project } from './Project/Project'

export const App = () =>
    <div>
        <Root/>
        <Project projectName={'joyful'}/>
    </div>
