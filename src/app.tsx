import './Styles/skeleton.css'
import './Styles/normalize.css'
import './Styles/main.css'
import * as React from 'react'
import CLI from './Components/CLI'
import { Query } from 'react-apollo'
import { loadAppQuery } from './Query/types'
import { SomethingWentWrong } from './Components/Utils/Errors'
import Root from './Components/Header/Root'
import Welcome from './Components/Header/welcome'
import { loadApp } from './app.queries'

class InitialQuery extends Query<loadAppQuery> {}

export const App: React.SFC = () => {
    return (
        <InitialQuery query={loadApp}>
            {({loading, data, error}) => {
                if (error || !data) {
                    return <SomethingWentWrong/>
                }
                if (loading) {
                    return (
                        <div className="welcome-loading">
                            loading <span className="text-head">my little virtual friend</span>
                            <span className="text-base"> ...</span>
                        </div>
                    )
                }

                const welcomeData = data.user ? data.user : null
                if (!welcomeData) {
                    return <SomethingWentWrong/>
                }

                const welcome = welcomeData.get ? welcomeData.get : null
                if (!welcome) {
                    return <SomethingWentWrong/>
                }

                const name = welcome.name ? welcome.name : ''
                const welcomeMessage = welcome.welcomeMessage ? welcome.welcomeMessage as string[] : ['']

                return (
                    <div className="app">
                        <div className="row">
                            <div className="two columns">
                                <Root/>
                            </div>
                            <div className="ten columns">
                                <Welcome name={name} welcomeMessage={welcomeMessage}/>
                            </div>
                        </div>
                        <CLI/>
                    </div>
                )
            }}
        </InitialQuery>
    )
}

export default App