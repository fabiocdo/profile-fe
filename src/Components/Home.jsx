import { React, Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {

        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route render={() => <Redirect to="/login" />} />
            </Switch>
        );
    }
}

export default Home;