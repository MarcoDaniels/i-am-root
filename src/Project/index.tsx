import * as React from 'react'
import { GetProject } from './GetProject'
import { ListProject } from './ListProject'
import HelpProject from './HelpProject'

interface ProjectProps {
    options: string
}

export const Project: React.SFC<ProjectProps> = props => {
    const { options } = props
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
            default:
                return (<HelpProject/>)
        }
    }

    return (<HelpProject/>)
}