import { listAboutQuery } from '../../Query/types'
import { listAbout } from './about.queries'
import { Query } from 'react-apollo'
import * as React from 'react'
import { SomethingWentWrong } from '../Utils/Errors'
import { scrollIntoView } from '../Utils/Loading'

class AboutQuery extends Query<listAboutQuery> {}

export const AboutList: React.SFC = () => {
    return (
        <AboutQuery query={listAbout}>
            {({loading, data, error}) => {
                if (error || !data) {
                    return <SomethingWentWrong/>
                }
                if (loading) {
                    return <div>fetching users ...</div>
                }

                const aboutData = data.user
                if (!aboutData) {
                    return <SomethingWentWrong/>
                }

                const users = aboutData.list.data
                if (!users) {
                    return <SomethingWentWrong/>
                }

                return (
                    <div ref={instance => { scrollIntoView(instance) }}>
                        {users.map((user, i) => user && (
                            <div className="list" key={i}>
                                <div>
                                    <span className="text-head">name: </span>
                                    <span className="text-name">{user.name}</span>
                                </div>
                                <div>
                                    <span className="text-head">title: </span>
                                    <span className="text-name">{user.title}</span>
                                </div>
                                <div>
                                    <span className="text-head">u_name: </span>
                                    <span className="text-name">{user.userName}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }}
        </AboutQuery>
    )
}

export default AboutList