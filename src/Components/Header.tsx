import * as React from 'react'
import { Root } from './Root'
import { Welcome } from './Welcome'

export const Header = () =>
    <div className="header">
        <Root/>
        <Welcome/>
    </div>

export default Header