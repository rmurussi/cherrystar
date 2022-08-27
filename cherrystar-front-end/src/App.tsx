import './App.css';

import { ApolloProvider } from '@apollo/client';  
import { useMemo, useState } from 'react';

import ApolloDef from './provider/ApolloDef';
import ThAppBar from './components/ThAppBar';
import AppLogin from './pages/login/Login';
import { getUser } from './provider/User';
import Access from './components/Access';

function App() {
  //State of User LoggedIn or Out
  const [user, setUser] = useState(getUser());
  
  //Card User+Password
  const memoLogin = useMemo(() => {
    return !user.token ? <AppLogin user={user} setUs={setUser} /> : '';
  }, [user]);
  
  //Grid Logs
  const memoList = useMemo(() => {
    return !user.token ? '' : <Access />;
  }, [user]);

  //Apollo Definition
  const memoApolloDef = useMemo(() => {
    return user.token ? ApolloDef(user.token, user.tenant) : ApolloDef('', '');
  }, [user]);

  return (
    <ApolloProvider client={memoApolloDef}>
      <div className="App">
        <ThAppBar user={user} setUs={setUser} />
        {memoLogin}
        {memoList}
      </div>
    </ApolloProvider>
  );
}

export default App;
