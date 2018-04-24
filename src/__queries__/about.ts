import gql from 'graphql-tag'

export const getAbout = gql`
    query getAbout($userName: String!) {
        user {
            get(userName: $userName) {
                name
                userName
                title
                description
            }
        }
    }
`

export const listAbout = gql`
    query listAbout {
        user {
            list {
                name
                userName
                title
            }
        }
    }
`