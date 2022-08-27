import {gql, useMutation} from '@apollo/client';

import {getUser, setUser} from './../provider/User';

function UserLogin(prop: any) {
    let user = getUser();

    const LOGIN = gql`
      mutation Login($email: String!, $password: String!)
      {
        Login(email: $email, password: $password) {
          id
          name
          token
        }
      }
    `;

    const [login, {loading}] = useMutation(
        LOGIN,
        {
            onCompleted: (i: any) => {
                prop.setUs(i.Login);
                setUser(i.Login);
            }
        }
    );
    
    if (loading) {}
    else if (user.email != '') {
        prop.setUs(user);
    }
    else if (user.email == '') {
        login(
            { variables:
                { email: "renan@hot.com",
                  password: "12345678"
                }
            }
        );
    }

    return (
        <div></div>
    );
}
export default UserLogin;