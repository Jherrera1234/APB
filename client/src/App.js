import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router';
import Layout from './layouts/Layout';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from './services/auth';
function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory();

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  };


  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>
        </Switch>

      </Layout >

    </div>
  );
}

export default App;
