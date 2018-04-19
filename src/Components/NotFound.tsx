import * as React from 'react'

interface NotFoundProps {
    command: string
}

export const NotFound: React.SFC<NotFoundProps> = props => {
    const { command } = props
    return (
        <div>
            <div><span className="text-head">¯\_(<span className="text-name">ツ</span>)_/¯</span> Ooops!</div>
            <div>command: "{command}" not found...</div>
        </div>
    )
}

export default NotFound