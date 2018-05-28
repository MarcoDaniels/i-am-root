import * as React from 'react'

export interface UserProps {
    lastCommand?: string
}

export const User: React.SFC<UserProps> = props => {
    const { lastCommand } = props
    return (
        <div className="user">
            <span className="text-base">
                <span className="text-head">root</span>
                <span className="text-name">@mylittlevirtualfriend</span>
                <span> $ </span> {lastCommand}
            </span>
        </div>
    )
}

export default User