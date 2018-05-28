import * as React from 'react'

export type WelcomeProps = {
    name: string
    welcomeMessage: string[]
}

export const Welcome: React.SFC<WelcomeProps> = props => {
    const {name, welcomeMessage} = props
    return (
        <div className="welcome">
            <h1 className="text-head">{name}!</h1>
            {welcomeMessage.map((item, i) => item && (
                <div key={i}>{item}</div>
            ))}
        </div>
    )
}

export default Welcome