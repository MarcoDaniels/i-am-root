import * as React from 'react'
import HelpGet from '../Help/get'
import AboutGet from './get'
import AboutList from './list'
import AboutGetWork from './work'

interface AboutProps {
    command: string
    options: string
}

export const About: React.SFC<AboutProps> = props => {
    const {options, command} = props
    let expression = new RegExp('(-?[-]\\w+)')
    let flags = expression.exec(options)

    if (flags) {
        const userName = options.slice(flags[0].length).slice(1)
        switch (flags[0]) {
            case '-i':
            case '--info':
                if (!userName) {
                    return <HelpGet helpType="about" command={command}/>
                }
                return <AboutGet userName={userName}/>
            case '-ls':
            case '--list':
                return <AboutList/>
            case '-w':
            case '--work':
                if (!userName) {
                    return <HelpGet helpType="about" command={command}/>
                }
                return <AboutGetWork userName={userName}/>
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