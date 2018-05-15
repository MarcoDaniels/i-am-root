import * as React from 'react'
import HelpGet from '../Help/get'
import ProjectGet from './get'
import ProjectList from './list'

interface ProjectProps {
    command: string
    options: string
}

export const Project: React.SFC<ProjectProps> = props => {
    const { options, command } = props
    let expression = new RegExp('(-?[-]\\w+)')
    let flags = expression.exec(options)

    if (flags) {
        switch (flags[0]) {
            case '-i':
            case '--info':
                // because of whitespace
                const projectName = options.slice(flags[0].length).slice(1)
                if (!projectName) {
                    return <HelpGet helpType="project" command={command}/>
                }
                return <ProjectGet projectName={projectName}/>
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