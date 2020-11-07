import { React, Component } from 'react';
import { TextField, Button, Paper, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import '../Styles/login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        const { username, password } = this.state;

        return (
            <div className="lg-container">
                <Paper elevation={3} >
                    <div className="lg-box">
                        <div className="lg-title">
                            <HomeIcon fontSize="large" />
                            <Typography variant="h5" component="h2">Login</Typography>
                        </div>
                        <div className="lg-input">
                            <TextField
                                id="standard-basic"
                                label="Username"
                                type="text"
                                onChange={this.usernameInputHandler}
                                value={username} />
                        </div>
                        <div className="lg-input">
                            <TextField
                                id="standard-basic"
                                label="Password"
                                type="password"
                                onChange={this.passwordInputHandler}
                                value={password} />
                        </div>
                        <div className="lg-button-section">
                            <Button variant="contained" color="primary" onClick={this.loginButtonHandler}> Log In </Button>
                            <Link to="/signup" > <Button color="default"> Sign Up </Button> </Link>
                        </div>
                    </div>
                </Paper >
            </div>
        );
    }

    loginButtonHandler = () => {
        console.log("Login clicado");
    }

    usernameInputHandler = (arg) => {
        const username = arg.target.value;

        this.setState({
            username
        });
    }

    passwordInputHandler = (arg) => {
        const password = arg.target.value;

        this.setState({
            password
        });
    }
}

export default Login;