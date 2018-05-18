import * as React from 'react'
import { Component } from 'react'
import { ProjectNotFound, ProjectQuery } from './get'
import { getProject } from './project.queries'
import { SomethingWentWrong } from '../Utils/Errors'
import { Opening, scrollIntoView } from '../Utils/Loading'

type Props = {
    projectName: string
}

export class ProjectOpen extends Component<Props, any> {

    constructor(props: any) {
        super(props)
    }

    openProject(element: any) {
        if (element !== null) {
            element.click()
        }
    }

    render() {
        return (
            <ProjectQuery query={getProject} variables={{projectName: this.props.projectName}}>
                {({loading, data, error}) => {
                    if (error || !data) {
                        return <SomethingWentWrong/>
                    }
                    if (loading) {
                        return <Opening name={this.props.projectName}/>
                    }

                    const projectData = data.project ? data.project : null
                    if (!projectData) {
                        return <SomethingWentWrong/>
                    }

                    const project = projectData.get ? projectData.get : null
                    if (!project) {
                        return <ProjectNotFound projectName={this.props.projectName}/>
                    }

                    return (
                        <div ref={instance => { scrollIntoView(instance) }}>
                            <a ref={this.openProject} target="_blank" href={project.homepage ? project.homepage : ''} >
                                <span className="text-head">open:</span> {project.homepage}
                            </a>
                        </div>
                    )
                }}
            </ProjectQuery>
        )
    }
}

export default ProjectOpen