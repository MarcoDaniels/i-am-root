import * as React from 'react'
import GetHelp from '../Help/GetHelp'
import GetProject from './GetProject'
import ListProject from './ListProject'

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
                    return <GetHelp helpType="project" command={command}/>
                }
                return <GetProject projectName={projectName}/>
            case '-ls':
            case '--list':
                return <ListProject/>
            case '-h':
            case '--help':
                return <GetHelp helpType="project"/>
            default:
                return <GetHelp helpType="project" command={command}/>
        }
    }

    return <GetHelp helpType="project" command={command}/>
}

export default Project