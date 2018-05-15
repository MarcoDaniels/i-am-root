import * as React from 'react'
import HelpGet from '../Help/get'
import AboutGet from './get'
import AboutList from './list'

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
                    return <HelpGet helpType="about" command={command}/>
                }
                return <AboutGet userName={userName}/>
            case '-ls':
            case '--list':
                return <AboutList/>
            case '-h':
            case '--help':
                return <HelpGet helpType="about"/>
            default:
                return <HelpGet helpType="about" command={command}/>
        }
    }

    return <HelpGet helpType="about" command={command}/>
}

export default About