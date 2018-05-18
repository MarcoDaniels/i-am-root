import * as React from 'react'
import HelpGet from '../Help/get'
import ProjectGet from './get'
import ProjectList from './list'
import ProjectOpen from './open'

interface ProjectProps {
    command: string
    options: string
}

export const Project: React.SFC<ProjectProps> = props => {
    const { options, command } = props
    let expression = new RegExp('(-?[-]\\w+)')
    let flags = expression.exec(options)

    if (flags) {
        const projectName = options.slice(flags[0].length).slice(1)
        switch (flags[0]) {
            case '-i':
            case '--info':
                if (!projectName) {
                    return <HelpGet helpType="project" command={command}/>
                }
                return <ProjectGet projectName={projectName}/>
            case '-o':
            case '--open':
                if (!projectName) {
                    return <HelpGet helpType="project" command={command}/>
                }
                return <ProjectOpen projectName={projectName}/>
            case '-ls':
            case '--list':
                return <ProjectList/>
            case '-h':
            case '--help':
                return <HelpGet helpType="project"/>
            default:
                return <HelpGet helpType="project" command={command}/>
        }
    }

    return <HelpGet helpType="project" command={command}/>
}

export default Project