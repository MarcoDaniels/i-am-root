import { getHelpQuery, getHelpQueryVariables } from '../../Query/types'
import { getHelp } from './help.queries'
import { Query } from 'react-apollo'
import * as React from 'react'
import { SomethingWentWrong } from '../Utils/Errors'
import { scrollIntoView } from '../Utils/Loading'

class HelpQuery extends Query<getHelpQuery, getHelpQueryVariables> {}

interface GetHelpProps {
    helpType: string
    command?: string
}

export const HelpGet: React.SFC<GetHelpProps> = props => {
    const { command, helpType } = props
    return (
        <HelpQuery query={getHelp} variables={{helpType}}>
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

                const help = helpData.get ? helpData.get : null
                if (!help) {
                    return <SomethingWentWrong/>
                }

                const content = help.content ? help.content : null
                if (!content) {
                    return <SomethingWentWrong/>
                }

                const commandHelp = command ? command + ' is not a valid command ...' : null

                return (
                    <div ref={instance => { scrollIntoView(instance) }}>
                        <div>{commandHelp}</div>
                        <div className="help-usage">
                            <span className="font-brown">usage: </span>
                            <span className="font-green">{help.usage}</span>
                        </div>
                        <div className="help-content">
                            {content.map((item, i) => item && (
                                <div key={i}>{item}</div>
                            ))}
                        </div>
                    </div>
                )
            }}
        </HelpQuery>
    )
}

export default HelpGet