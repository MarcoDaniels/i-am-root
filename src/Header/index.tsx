import * as React from 'react'
import './header.css'
import { Root } from './Root'
import { Welcome } from './Welcome'

export const Header = () =>
    <div className="header">
        <Root/>
        <Welcome/>
    </div>