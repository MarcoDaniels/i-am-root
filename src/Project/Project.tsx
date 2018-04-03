import { GetProjectQuery, GetProjectQueryVariables } from '../__generated__/types'
import { GetProject } from '../__queries__/queries'
import { Query } from 'react-apollo'
import * as React from 'react'

class ProjectQuery extends Query<GetProjectQuery, GetProjectQueryVariables> {}

interface ProjectProps {
    projectName: string
}

export const Project: React.SFC<ProjectProps> = props => {
    const { projectName } = props

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
                                <p>dynamic {project.get.name}</p>
                            </div>
                        )}
                    </div>
                )
            }}
        </ProjectQuery>
    )
}