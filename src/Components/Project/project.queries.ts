import gql from 'graphql-tag'

export const getProject = gql`
    query getProject($projectName: String!) {
        project {
            get(name: $projectName) {
                name
                homepage
                releaseDate
                description
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