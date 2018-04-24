import gql from 'graphql-tag'

export const help = gql`
    query help {
        help {
            list {
                type
                description
                usage
            }
        }
    }
`