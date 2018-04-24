import { helpQuery } from '../__generated__/types'
import { help } from '../__queries__/help'
import { Query } from 'react-apollo'
import * as React from 'react'
import { SomethingWentWrong } from './Errors'

class HelpQuery extends Query<helpQuery> {}

export const Help: React.SFC = () => {

    return (
        <HelpQuery query={help}>
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
                    <div>
                        { features.map((feature, i) => feature && (
                            <div className="list" key={i}>
                                <div>
                                    <span className="text-head">{feature.type}: </span>
                                    <span className="text-name"> {feature.description}</span>
                                </div>
                                <div>
                                    <span className="text-head">usage: </span>
                                    <span className="text-name">{feature.usage}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }}
        </HelpQuery>
    )
}

export default Help