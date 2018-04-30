import { listHelpQuery } from '../../__generated__/types'
import { listHelp } from '../../__queries__/help'
import { Query } from 'react-apollo'
import * as React from 'react'
import { SomethingWentWrong } from '../Errors'

class HelpQuery extends Query<listHelpQuery> {}

export const ListHelp: React.SFC = () => {
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
                    <div>
                        { features.map((feature, i) => feature && (
                            <div className="list" key={i}>
                                <div>
                                    <span>{feature.type}</span>
                                </div>
                                <div>
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

export default ListHelp