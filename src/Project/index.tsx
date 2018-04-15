import { GetProjectQuery, GetProjectQueryVariables } from '../__generated__/types'
import { GetProject } from '../__queries__/queries'
import { Query } from 'react-apollo'
import * as React from 'react'

class ProjectQuery extends Query<GetProjectQuery, GetProjectQueryVariables> {}

interface ProjectProps {
    options: string
}

export const Project: React.SFC<ProjectProps> = props => {
    // TODO: entity logic should be handled here?
    const { options } = props
    let expression = new RegExp('(-?[-]\\w+)')
    let flags = expression.exec(options)

    let projectName = ''

    if (flags) {
        switch (flags[0]) {
            case '-i':
            case '--info':
                // because of whitespace
                projectName = options.slice(flags[0].length).slice(1)
                break
            case '-ls':
            case '--list':
                console.log('list')
                break
            default:
                console.log('help')
        }
    }

    return (
        <ProjectQuery query={GetProject} variables={{projectName}}>
            {({ loading, data, error }) => {

                if (loading) {
                    return <div>Loading</div>
                }
                if (error) {
                    return <h1>ERROR</h1>
                }
                if (!data) {
                    return <div>no data</div>
                }

                const { project } = data

                return (
                    <div>
                        { project && project.get && (
                            <div>
                                <p>{project.get.name}</p>
                            </div>
                        )}
                    </div>
                )
            }}
        </ProjectQuery>
    )
}