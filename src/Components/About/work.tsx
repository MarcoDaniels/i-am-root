import { Query } from 'react-apollo'
import { getAboutWorkQuery, getAboutWorkQueryVariables } from '../../Query/types'
import * as React from 'react'
import { GetAboutProps, UserNotFound } from './get'
import { getAboutWork } from './about.queries'
import { SomethingWentWrong } from '../Utils/Errors'
import Loading, { scrollIntoView } from '../Utils/Loading'

class AboutWorkQuery extends Query<getAboutWorkQuery, getAboutWorkQueryVariables> {}

export const AboutGetWork: React.SFC<GetAboutProps> = props => {
    const {userName} = props
    return (
        <AboutWorkQuery query={getAboutWork} variables={{userName}}>
            {({ loading, data, error }) => {
                if (error || !data) {
                    return <SomethingWentWrong/>
                }
                if (loading) {
                    return <Loading name={userName + ' work experience'}/>
                }

                const userData = data.user ? data.user : null
                if (!userData) {
                    return <SomethingWentWrong/>
                }

                const user = userData.get ? userData.get : null
                if (!user) {
                    return <UserNotFound userName={userName}/>
                }
                
                const experiences = user.experience ? user.experience : null
                if (!experiences || !experiences.length) {
                    return (
                        <div ref={instance => { scrollIntoView(instance) }}>
                            <div>
                                <span className="text-head">{userName}</span>
                                <span className="text-name"> has no work experience...</span>
                            </div>
                            <div>
                                <span className="text-head">I AM ROOT.</span>
                                <span className="text-name"> I am a machine.</span>

                            </div>
                        </div>
                    )
                }

                return (
                    <div ref={instance => { scrollIntoView(instance) }}>
                        {experiences.map((experience, i) => experience && (
                            <div className="list" key={i}>
                                <div>
                                    <span className="text-head">position: </span>
                                    <span className="text-name">{experience.position}</span>
                                </div>
                                <div>
                                    <span className="text-head">location: </span>
                                    <span className="text-name">{experience.location}</span>
                                </div>
                                <div>
                                    <span className="text-head">since: </span>
                                    <span className="text-name">{experience.from}</span>
                                    <span> | </span>
                                    <span className="text-head">until: </span>
                                    <span className="text-name">{experience.to}</span>
                                </div>
                                <div>
                                    {experience.details && (experience.details.map((item, key) => item && (
                                        <div key={key}>
                                            <span>{item}</span>
                                        </div>
                                    )))}
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }}
        </AboutWorkQuery>
    )
}

export default AboutGetWork