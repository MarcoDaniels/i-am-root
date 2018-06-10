import * as React from 'react'
import { scrollIntoView } from './Loading'

export type NotFoundProps = {
    command: string
}

export const Ooops: React.SFC = () => {
    return (
        <div><span className="text-head">¯\_(<span className="text-name">ツ</span>)_/¯</span> Ooops!</div>
    )
}

export const SomethingWentWrong: React.SFC = () => {
    return (
        <div ref={instance => { scrollIntoView(instance) }}>
            <Ooops/>
            <div>something went wrong...</div>
        </div>
    )
}

export const CommandNotFound: React.SFC<NotFoundProps> = props => {
    const { command } = props
    return (
        <div ref={instance => { scrollIntoView(instance) }}>
            <Ooops/>
            <div>command: "{command}" not found...</div>
        </div>
    )
}
