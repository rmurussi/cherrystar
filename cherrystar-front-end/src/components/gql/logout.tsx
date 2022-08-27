import {gql} from '@apollo/client';

const GQL_LOGOUT = gql`
    mutation logout {
        logout {
            id
            name
            token
            tenant
        }
    }
`;

export { GQL_LOGOUT };