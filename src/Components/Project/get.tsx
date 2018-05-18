import { getProjectQuery, getProjectQueryVariables } from '../../Query/types'
import { getProject } from './project.queries'
import { Query } from 'react-apollo'
import * as React from 'react'
import { Ooops, SomethingWentWrong } from '../Utils/Errors'
import Loading, { scrollIntoView } from '../Utils/Loading'

export class ProjectQuery extends Query<getProjectQuery, getProjectQueryVariables> {}

export interface GetProjectProps {
    projectName: string
}

export const ProjectNotFound: React.SFC<GetProjectProps> = props => {
    const {projectName} = props
    return (
        <div ref={instance => { scrollIntoView(instance) }}>
            <Ooops/>
            <div>project: <span className="font-green">{projectName}</span> does not exist</div>
            <div>type <span className="font-green">projects -ls</span> to list all projects</div>
        </div>
    )
}

export const ProjectGet: React.SFC<GetProjectProps> = props => {
    const {projectName} = props
    return (
        <ProjectQuery query={getProject} variables={{projectName}}>
            {({ loading, data, error }) => {
                if (error || !data) {
                    return <SomethingWentWrong/>
                }
                if (loading) {
                    return <Loading name={projectName}/>
                }

                const projectData = data.project ? data.project : null
                if (!projectData) {
                    return <SomethingWentWrong/>
                }

                const project = projectData.get ? projectData.get : null
                if (!project) {
                    return <ProjectNotFound projectName={projectName}/>
                }

                return (
                    <div ref={instance => { scrollIntoView(instance) }}>
                        <h2 className="font-green">{project.name}</h2>
                        <p>{project.details}</p>
                        <p>homepage: <a href={project.homepage ? project.homepage : ''}>{project.homepage}</a></p>
                        <p>released in {project.releaseDate}</p>
                    </div>
                )
            }}
        </ProjectQuery>
    )
}

export default ProjectGet