import { helpProjectQuery } from '../../__generated__/types'
import { helpProject } from '../../__queries__/queries'
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

                return (
                    <div>
                        {command}
                        { content.map((item, i) => item && (
                            <div key={i}>
                                <div>{item}</div>
                            </div>
                        ))}
                    </div>
                )
            }}
        </ProjectQuery>
    )
}

export default HelpProject