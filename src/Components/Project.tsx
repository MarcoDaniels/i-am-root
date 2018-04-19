import * as React from 'react'
import GetProject from './Project/GetProject'
import ListProject from './Project/ListProject'
import HelpProject from './Project/HelpProject'

interface ProjectProps {
    command: string
    options: string
}

export const Project: React.SFC<ProjectProps> = props => {
    const { options, command } = props
    let expression = new RegExp('(-?[-]\\w+)')
    let flags = expression.exec(options)

    let projectName = ''

    if (flags) {
        switch (flags[0]) {
            case '-i':
            case '--info':
                // because of whitespace
                projectName = options.slice(flags[0].length).slice(1)
                return (<GetProject projectName={projectName}/>)
            case '-ls':
            case '--list':
                return (<ListProject/>)
            case '-h':
            case '--help':
                return (<HelpProject/>)
            default:
                return (<HelpProject command={command}/>)
        }
    }

    return (<HelpProject command={command}/>)
}

export default Project