import gql from 'graphql-tag'

export const GetProject = gql`
    query GetProject($projectName: String!) {
        project {
            get(name: $projectName) {
                name
                homepage
            }
        }
    }
`
