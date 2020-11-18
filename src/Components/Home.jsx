import { React, Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            userData: {}
        }
    }

    render() {

        return (
            <Switch>
                <Route exact path="/" render={() => (
                    this.state.isLoggedIn === true
                        ? <Profile logout={this.logout} />
                        : <Login setUserData={this.setUserData} />
                )} />
                <Route path="/login" component={() => <Login setUserData={this.setUserData} />} />
                <Route path="/profile" component={() => <Profile logout={this.logout} />} />
                <Route path="/signup" component={SignUp} />

            </Switch >
        );

    }

    loginTrigger = (value) => {

        this.setState({
            isLoggedIn: value
        })
    }

    logout = () => {
        this.loginTrigger(false);
        return <Redirect to="/" />
    }

    setUserData = async (userData) => {

        const userFullData = await userData;

        this.setState({
            userData: userFullData
        })

        this.loginTrigger(true);
    }

}


export default Home;