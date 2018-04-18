import { helpProjectQuery } from '../__generated__/types'
import { helpProject } from '../__queries__/queries'
import { Query } from 'react-apollo'
import * as React from 'react'

class ProjectQuery extends Query<helpProjectQuery> {}

export const HelpProject: React.SFC = () => {

    return (
        <ProjectQuery query={helpProject}>
            {({ loading, data, error }) => {

                if (loading) {
                    return <div>Loading</div>
                }
                if (error) {
                    return <h1>ERROR</h1>
                }
                if (!data) {
                    return <div>no data</div>
                }

                const { project } = data

                return (
                    <div>
                        { project && project.help && project.help.content && (
                            project.help.content.map((item, i) => item && (
                                <p key={i}>{item}</p>
                            ))
                        )}
                    </div>
                )
            }}
        </ProjectQuery>
    )
}

export default HelpProject