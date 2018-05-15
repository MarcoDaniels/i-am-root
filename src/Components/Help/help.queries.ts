import gql from 'graphql-tag'

export const getHelp = gql`    
    query getHelp($helpType: String!) {
        help {
            get(type: $helpType) {
                usage
                content
            }
        }
    }
`

export const listHelp = gql`
    query listHelp {
        help {
            list {
                type
                description
                usage
                content
            }
        }
    }
`