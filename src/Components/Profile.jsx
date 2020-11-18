import { React, Component } from 'react';
import { Button } from '@material-ui/core';
import '../Styles/login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const { logout } = this.props;

        return (
            <div>
                <Button variant="contained" color="secondary" onClick={logout}> Sair </Button>
            </div>
        );
    }
}

export default Login;