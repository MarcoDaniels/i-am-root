import { listProjectsQuery } from '../__generated__/types'
import { listProjects } from '../__queries__/queries'
import { Query } from 'react-apollo'
import * as React from 'react'

class ProjectQuery extends Query<listProjectsQuery> {}

export const ListProject: React.SFC = () => {

    return (
        <ProjectQuery query={listProjects}>
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
                        { project && project.list && project.list.map((item, i) => item && (
                            <p key={i}>{item.homepage}</p>
                        ))}
                    </div>
                )
            }}
        </ProjectQuery>
    )
}

export default ListProject