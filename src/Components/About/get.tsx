import { Query } from 'react-apollo'
import { getAboutQuery, getAboutQueryVariables } from '../../Query/types'
import * as React from 'react'
import { getAbout } from './about.queries'
import { Ooops, SomethingWentWrong } from '../Utils/Errors'
import Loading, { scrollIntoView } from '../Utils/Loading'

class AboutQuery extends Query<getAboutQuery, getAboutQueryVariables> {}

export interface GetAboutProps {
    userName: string
}

export const UserNotFound: React.SFC<GetAboutProps> = props => {
    const {userName} = props
    return (
        <div ref={instance => { scrollIntoView(instance) }}>
            <Ooops/>
            <div>user: <span className="font-green">{userName}</span> does not exist</div>
            <div>type <span className="font-green">about -ls</span> to list all users</div>
        </div>
    )
}

export const AboutGet: React.SFC<GetAboutProps> = props => {
    const {userName} = props
    return (
        <AboutQuery query={getAbout} variables={{userName}}>
            {({ loading, data, error }) => {
                if (error || !data) {
                    return <SomethingWentWrong/>
                }
                if (loading) {
                    return <Loading name={userName}/>
                }

                const userData = data.user ? data.user : null
                if (!userData) {
                    return <SomethingWentWrong/>
                }

                const user = userData.get ? userData.get : null
                if (!user) {
                    return <UserNotFound userName={userName}/>
                }

                return (
                    <div ref={instance => { scrollIntoView(instance) }}>
                        <div className="list">
                            <div>
                                <span className="text-name">{user.name}</span>
                            </div>
                            <div>
                                <span className="text-head">{user.title}</span>
                            </div>
                            <div>
                                {user.description && user.description.map((item, i) => item && (
                                    <div key={i}>{item}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }}
        </AboutQuery>
    )
}

export default AboutGet