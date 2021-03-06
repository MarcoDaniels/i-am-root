import { listHelpQuery } from '../../Query/types'
import { listHelp } from './help.queries'
import { Query } from 'react-apollo'
import * as React from 'react'
import { SomethingWentWrong } from '../Utils/Errors'
import { scrollIntoView } from '../Utils/Loading'

class HelpQuery extends Query<listHelpQuery> {}

export const HelpList: React.SFC = () => {
    return (
        <HelpQuery query={listHelp}>
            {({ loading, data, error }) => {
                if (error || !data) {
                    return <SomethingWentWrong/>
                }
                if (loading) {
                    return <div>getting help ...</div>
                }

                const helpData = data.help ? data.help : null
                if (!helpData) {
                    return <SomethingWentWrong/>
                }

                const features = helpData.list ? helpData.list : null
                if (!features) {
                    return <SomethingWentWrong/>
                }
                return (
                    <div ref={instance => { scrollIntoView(instance) }}>
                        <div>My little virtual friend, version 1.0.0</div>
                        <div className="text-head">These are commands I can understand:</div>
                        { features.map((feature, i) => feature && (
                            <div className="list" key={i}>
                                <div>
                                    <span>`{feature.type}`</span>
                                    <span className="text-name"> {feature.description}</span>
                                </div>
                                <div>
                                    <span className="text-head">usage: </span>
                                    <span>{feature.usage}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }}
        </HelpQuery>
    )
}

export default HelpList