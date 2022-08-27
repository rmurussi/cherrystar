import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';  

//Definition of requests from Apollo-client

function ApolloDef (token: String, tenant: String) {
    const link = new HttpLink({ 
        uri: "http://localhost/graphql",
        headers: { 
            'Authorization': `Bearer ${token}`,
            'X-Tenant': `${tenant}`
        }
    });
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link
    });

    return client;
}

export default ApolloDef;