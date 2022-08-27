import {gql} from '@apollo/client';

const GQL_LOGIN = gql`
    mutation Login($email: String!, $password: String!)
    {
        Login(email: $email, password: $password) {
            id
            name
            token
            tenant
        }
    }
`;

export { GQL_LOGIN };