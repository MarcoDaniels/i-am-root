import * as React from 'react'

interface LoadingProps {
    name: string
}

export const Loading: React.SFC<LoadingProps> = props => {
    const {name} = props
    return (
        <div>fetching <span className="font-green">{name}</span> ...</div>
    )
}

export default Loading