import {gql} from '@apollo/client';

const GQL_LISTINFO = gql`
    query  {
        access {
            browser
            ip
            date
            id
        }
    }
`;

export { GQL_LISTINFO };