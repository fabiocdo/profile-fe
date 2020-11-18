import { React, Component } from 'react';
import { TextField, Button, Paper, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import '../Styles/login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: ''
        }
    }

    render() {
        const { email, senha } = this.state;

        return (
            <div className="lg-container">
                <Paper elevation={3} >
                    <div className="lg-box">
                        <div className="lg-title">
                            <HomeIcon fontSize="large" />
                            <Typography variant="h6" component="h3">Login</Typography>
                        </div>
                        <div className="lg-input">
                            <TextField
                                id="standard-basic"
                                label="E-mail"
                                name="email"
                                type="text"
                                onChange={this.setField}
                                value={email} />
                        </div>
                        <div className="lg-input">
                            <TextField
                                id="standard-basic"
                                label="Senha"
                                name="senha"
                                type="password"
                                onChange={this.setField}
                                value={senha} />
                        </div>
                        <div className="lg-button-section">
                            <Button variant="contained" color="primary" onClick={this.login}> Entrar </Button>
                            <Link to="/signup" > <Button color="default"> Cadastrar-se </Button> </Link>
                        </div>
                    </div>
                </Paper >
            </div>
        );
    }

    setField = event => {

        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    buscaCadastro = async (requestBody) => {

        const response = await fetch('http://localhost:8080/login', {
            method: 'post',
            body: JSON.stringify(requestBody),
            headers: { 'Content-Type': 'application/json' },
        });

        return response;
    }

    login = async () => {

        const { setUserData } = this.props;

        const requestBody = {
            "email": this.state.email,
            "senha": this.state.senha
        }

        if (!this.state.email && !this.state.senha) {
            alert("Ambos os campos são obrigatórios.");
        } else {

            const response = await this.buscaCadastro(requestBody);

            if (response.ok) {
                setUserData(response.json());

            } else {
                if (response.status === 404) {
                    alert("O e-mail ou senha estão incorretos.");
                }
                if (response.status === 401) {
                    alert("O e-mail ou senha estão incorretos.");
                }
            }

        }
    }
}

export default Login;