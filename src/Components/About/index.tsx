import * as React from 'react'
import ListAbout from './ListAbout'
import { SomethingWentWrong } from '../Errors'

interface AboutProps {
    command: string
    options: string
}

export const About: React.SFC<AboutProps> = props => {
    const {options} = props
    let expression = new RegExp('(-?[-]\\w+)')
    let flags = expression.exec(options)

    if (flags) {
        switch (flags[0]) {
            case '-ls':
            case '--list':
                return <ListAbout/>
            default:
                return <SomethingWentWrong/>
        }
    }

    return <SomethingWentWrong/>
}

export default About