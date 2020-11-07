import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login'
import SignUp from './Components/SignUp'

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"> <Login /> </Route>
        <Route path="/signup"> <SignUp /> </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
