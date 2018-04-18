import { getProjectQuery, getProjectQueryVariables } from '../__generated__/types'
import { getProject } from '../__queries__/queries'
import { Query } from 'react-apollo'
import * as React from 'react'

class ProjectQuery extends Query<getProjectQuery, getProjectQueryVariables> {}

interface GetProjectProps {
    projectName: string
}

export const GetProject: React.SFC<GetProjectProps> = props => {
    const { projectName } = props

    return (
        <ProjectQuery query={getProject} variables={{projectName}}>
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
                                <p>{project.get.homepage}</p>
                                <p>{project.get.releaseDate}</p>
                                <p>{project.get.details}</p>
                            </div>
                        )}
                    </div>
                )
            }}
        </ProjectQuery>
    )
}

export default GetProject