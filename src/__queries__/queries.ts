import gql from 'graphql-tag'

export const getProject = gql`
    query getProject($projectName: String!) {
        project {
            get(name: $projectName) {
                name
                homepage
                releaseDate
                details
            }
        }
    }
`

export const listProjects = gql`
    query listProjects {
        project {
            list {
                name
                homepage
                releaseDate
                description
            }
        }
    }
`

export const helpProject = gql`
    query helpProject {
        project {
            help {
                content
            }
        }
    }
`