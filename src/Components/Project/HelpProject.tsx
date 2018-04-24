import { helpProjectQuery } from '../../__generated__/types'
import { helpProject } from '../../__queries__/project'
import { Query } from 'react-apollo'
import * as React from 'react'
import { SomethingWentWrong } from '../Errors'

class ProjectQuery extends Query<helpProjectQuery> {}

interface HelpProjectProps {
    command?: string
}

export const HelpProject: React.SFC<HelpProjectProps> = props => {
    const { command } = props
    return (
        <ProjectQuery query={helpProject}>
            {({ loading, data, error }) => {
                if (error || !data) {
                    return <SomethingWentWrong/>
                }
                if (loading) {
                    return <div>getting help ...</div>
                }

                const projectData = data.project ? data.project : null
                if (!projectData) {
                    return <SomethingWentWrong/>
                }

                const project = projectData.help ? projectData.help : null
                if (!project) {
                    return <SomethingWentWrong/>
                }

                const content = project.content ? project.content : null
                if (!content) {
                    return <SomethingWentWrong/>
                }

                const commandHelp = command ? command + ' is not a valid command ...' : null

                return (
                    <div>
                        <div>{commandHelp}</div>
                        <div className="help-usage">
                            <span className="font-brown">usage: </span>
                            <span className="font-green">{project.usage}</span>
                        </div>
                        <div className="help-content">
                            {content.map((item, i) => item && (
                                <div key={i}>{item}</div>
                            ))}
                        </div>
                    </div>
                )
            }}
        </ProjectQuery>
    )
}

export default HelpProject