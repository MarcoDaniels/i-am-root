import { listProjectsQuery } from '../../__generated__/types'
import { listProjects } from '../../__queries__/queries'
import { Query } from 'react-apollo'
import * as React from 'react'
import { SomethingWentWrong } from '../Errors'

class ProjectQuery extends Query<listProjectsQuery> {}

export const ListProject: React.SFC = () => {

    return (
        <ProjectQuery query={listProjects}>
            {({ loading, data, error }) => {
                if (error || !data) {
                    return <SomethingWentWrong/>
                }
                if (loading) {
                    return <div>fetching projects ...</div>
                }

                const projectData = data.project ? data.project : null
                if (!projectData) {
                    return <SomethingWentWrong/>
                }

                const projects = projectData.list ? projectData.list : null
                if (!projects) {
                    return <SomethingWentWrong/>
                }

                return (
                    <div>
                        { projects.map((project, i) => project && (
                        <div className="project-list" key={i}>
                            <div>
                                <span className="text-head">name: </span>
                                <span className="text-name">{project.name}</span>
                            </div>
                            <div>
                                <span className="text-head">description: </span>
                                <span className="text-name">{project.description}</span>
                            </div>
                            <div>
                                <span className="text-head">homepage: </span>
                                <a href={project.homepage ? project.homepage : ''}>{project.homepage}</a>
                            </div>
                        </div>
                        ))}
                    </div>
                )
            }}
        </ProjectQuery>
    )
}

export default ListProject