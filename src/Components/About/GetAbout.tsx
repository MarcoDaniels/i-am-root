import { Query } from 'react-apollo'
import { getAboutQuery, getAboutQueryVariables } from '../../__generated__/types'
import * as React from 'react'
import { getAbout } from '../../__queries__/about'
import { Ooops, SomethingWentWrong } from '../Errors'
import Loading from '../Loading'

class AboutQuery extends Query<getAboutQuery, getAboutQueryVariables> {}

interface GetAboutProps {
    userName: string
}

const UserNotFound: React.SFC<GetAboutProps> = props => {
    const {userName} = props
    return (
        <div>
            <Ooops/>
            <div>user: <span className="font-green">{userName}</span> does not exist</div>
            <div>type <span className="font-green">about -ls</span> to list all users</div>
        </div>
    )
}

export const GetAbout: React.SFC<GetAboutProps> = props => {
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
                    <div>
                        <h2 className="font-green">{user.name}</h2>
                        <p className="font-brown">{user.title}</p>
                        <div className="help-content">
                        {user.description && user.description.map((item, i) => item && (
                            <div key={i}>{item}</div>
                        ))}
                        </div>
                    </div>
                )
            }}
        </AboutQuery>
    )
}

export default GetAbout