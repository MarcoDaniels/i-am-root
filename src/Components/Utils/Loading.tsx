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

export const Opening: React.SFC<LoadingProps> = props => {
    const {name} = props
    return (
        <div>opening <span className="font-green">{name}</span> ...</div>
    )
}

export function scrollIntoView(instance: any) {
    if (instance !== null) {
        instance.scrollIntoView()
    }
}

export default Loading