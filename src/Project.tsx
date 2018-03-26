import { GetProjectQuery, GetProjectQueryVariables } from './__generated__/types'
import { GetProject } from './queries'
import { Query } from 'react-apollo'
import * as React from 'react';

class ProjectQuery extends Query<GetProjectQuery, GetProjectQueryVariables> {}

interface ProjectProps {
    projectName: string
}

export const Project: React.SFC<ProjectProps> = props => {
    const { projectName } = props
    console.log('project: ', projectName)

    return (
        <ProjectQuery query={GetProject} variables={{projectName}}>
            {({ loading, data, error }) => {
                console.log(data)
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
                        { project && (
                            <p>{project}</p>
                        )}
                    </div>
                )
            }}
        </ProjectQuery>
    )
}