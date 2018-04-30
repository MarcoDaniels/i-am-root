import * as React from 'react'
import GetHelp from '../Help/GetHelp'
import GetAbout from './GetAbout'
import ListAbout from './ListAbout'

interface AboutProps {
    command: string
    options: string
}

export const About: React.SFC<AboutProps> = props => {
    const {options, command} = props
    let expression = new RegExp('(-?[-]\\w+)')
    let flags = expression.exec(options)

    if (flags) {
        switch (flags[0]) {
            case '-i':
            case '--info':
                // because of whitespace
                const userName = options.slice(flags[0].length).slice(1)
                if (!userName) {
                    return <GetHelp helpType="about" command={command}/>
                }
                return <GetAbout userName={userName}/>
            case '-ls':
            case '--list':
                return <ListAbout/>
            case '-h':
            case '--help':
                return <GetHelp helpType="about"/>
            default:
                return <GetHelp helpType="about" command={command}/>
        }
    }

    return <GetHelp helpType="about" command={command}/>
}

export default About