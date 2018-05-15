import * as React from 'react'
import Root from './Root'
import Welcome from './Welcome'

export const Header = () =>
    <div className="row">
        <div className="two columns">
            <Root/>
        </div>
        <div className="ten columns">
            <Welcome/>
        </div>
    </div>

export default Header