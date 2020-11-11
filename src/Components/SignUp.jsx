import { React, Component } from 'react';
import { Paper, TextField, Select, InputLabel, Divider, Button } from '@material-ui/core';
import '../Styles/signup.css';

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            sobrenome: '',
            email: '',
            emailCheck: '',
            dataDeNascimento: '',
            sexo: '',
            cep: '',
            logradouro: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            uf: '',
            senha: '',
            senhaCheck: '',
        }
    }

    render() {
        const {
            nome,
            sobrenome,
            email,
            emailCheck,
            dataDeNascimento,
            sexo,
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            uf,
            senha,
            senhaCheck,
        } = this.state;

        return (
            <div className="su-container" >
                <Paper elevation={3}>
                    <div className="su-box">
                        <div className="su-box-title">Dados pessoais</div>
                        <Divider />
                        <div className="su-box-top-row">
                            <div>
                                <TextField
                                    className="su-input2"
                                    id="standard-basic"
                                    type="text"
                                    label="Primeiro nome"
                                    name="nome"
                                    value={nome}
                                    onChange={e => this.setField(e.target.name, e.target.value)}
                                />
                            </div>
                            <div>
                                <TextField
                                    className="su-input2"
                                    id="standard-basic"
                                    label="Sobrenome"
                                    type="text"
                                    name="sobrenome"
                                    value={sobrenome}
                                    onChange={e => this.setField(e.target.name, e.target.value)}
                                />
                            </div>
                            <div>
                                <TextField
                                    className="su-input3"
                                    id="standard-basic"
                                    label="E-mail"
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={e => this.setField(e.target.name, e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="su-box-mid-row">
                            <div>
                                <TextField
                                    className="su-input2"
                                    id="date"
                                    label="Data de Nascimento"
                                    type="date"
                                    name="dataDeNascimento"
                                    value={dataDeNascimento}
                                    onChange={e => this.setField(e.target.name, e.target.value)}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="sexo">Sexo</InputLabel>
                                <Select
                                    native
                                    className="su-input2"
                                    name="sexo"
                                    value={sexo}
                                    onChange={e => this.setField(e.target.name, e.target.value)}
                                    inputProps={{ id: 'sexo' }}
                                >
                                    <option value="" />
                                    <option value={"Masculino"}>Masculino</option>
                                    <option value={"Feminino"}>Feminino</option>
                                    <option value={"Outro"}>Outro</option>
                                </Select>
                            </div>

                            <div>
                                <TextField
                                    className="su-input3"
                                    id="standard-basic"
                                    label="Confirme seu E-mail"
                                    type="text"
                                    name="emailCheck"
                                    value={emailCheck}
                                    onChange={e => this.setField(e.target.name, e.target.value)}
                                />
                            </div>

                        </div>
                        <div className="su-box-title">Endereço</div>
                        <Divider />
                        <div className="su-box-top-row">
                            <div>
                                <TextField
                                    className="su-input"
                                    id="standard-basic"
                                    type="text"
                                    label="CEP"
                                    placeholder="12345000"
                                    inputProps={{ maxLength: 8 }}
                                    name="cep"
                                    value={cep}
                                    onChange={this.setCep}
                                />
                            </div>
                            <div>
                                <TextField
                                    className="su-input3"
                                    id="standard-basic"
                                    label="Logradouro"
                                    placeholder="Av. Paulista"
                                    type="text"
                                    name="logradouro"
                                    value={logradouro}
                                    onChange={e => this.setField(e.target.name, e.target.value)}
                                />
                            </div>
                            <div>
                                <TextField
                                    className="su-input"
                                    id="standard-basic"
                                    label="Número"
                                    placeholder="999"
                                    type="text"
                                    name="numero"
                                    value={numero}
                                    onChange={e => this.setField(e.target.name, e.target.value)}
                                />
                            </div>
                            <div>
                                <TextField
                                    className="su-input1"
                                    id="standard-basic"
                                    label="Complemento"
                                    placeholder="Ap. 123"
                                    name="complemento"
                                    value={complemento}
                                    onChange={e => this.setField(e.target.name, e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="su-box-mid-row">
                            <div>
                                <TextField
                                    className="su-input2"
                                    id="standard-basic"
                                    label="Bairro"
                                    type="text"
                                    name="bairro"
                                    value={bairro}
                                    onChange={e => this.setField(e.target.name, e.target.value)}
                                />
                            </div>
                            <div>
                                <TextField
                                    className="su-input1"
                                    id="standard-basic"
                                    label="Cidade"
                                    type="text"
                                    name="cidade"
                                    value={cidade}
                                    onChange={e => this.setField(e.target.name, e.target.value)}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="uf" required>UF</InputLabel>
                                <Select
                                    native
                                    className="su-input-micro"
                                    name="uf"
                                    value={uf}
                                    onChange={e => this.setField(e.target.name, e.target.value)}
                                    inputProps={{ id: 'uf' }}
                                >
                                    <option value=""></option>
                                    <option value="AC">AC</option>
                                    <option value="AL">AL</option>
                                    <option value="AP">AP</option>
                                    <option value="AM">AM</option>
                                    <option value="BA">BA</option>
                                    <option value="CE">CE</option>
                                    <option value="DF">DF</option>
                                    <option value="ES">ES</option>
                                    <option value="GO">GO</option>
                                    <option value="MA">MA</option>
                                    <option value="MT">MT</option>
                                    <option value="MS">MS</option>
                                    <option value="MG">MG</option>
                                    <option value="PA">PA</option>
                                    <option value="PB">PB</option>
                                    <option value="PR">PR</option>
                                    <option value="PE">PE</option>
                                    <option value="PI">PI</option>
                                    <option value="RJ">RJ</option>
                                    <option value="RN">RN</option>
                                    <option value="RS">RS</option>
                                    <option value="RO">RO</option>
                                    <option value="RR">RR</option>
                                    <option value="SC">SC</option>
                                    <option value="SP">SP</option>
                                    <option value="SE">SE</option>
                                    <option value="TO">TO</option>
                                </Select>
                            </div>
                            <div>
                                <TextField
                                    className="su-input1"
                                    id="standard-basic"
                                    label="Sua senha"
                                    type="password"
                                    name="senha"
                                    value={senha}
                                    onChange={e => this.setField(e.target.name, e.target.value)}
                                />
                            </div>
                            <div>
                                <TextField
                                    className="su-input1"
                                    id="standard-basic"
                                    label="Confirme sua senha"
                                    type="password"
                                    name="senhaCheck"
                                    value={senhaCheck}
                                    onChange={e => this.setField(e.target.name, e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="su-button-section">
                            <div className="su-button-reset">
                                <Button variant="contained" type="reset" color="secondary" onClick={this.resetFields}> Limpar </Button>
                            </div>
                            <Button variant="contained" onClick={this.submit} color="primary"> Confirmar </Button>
                        </div>
                    </div>
                </Paper >
            </div >
        );
    }

    setField = (field, value) => {
        this.setState({ [field]: value })
    }

    setCep = async (arg) => {
        const cep = arg.target.value.replace(/[^0-9]+/g, '');
        this.setState({
            cep
        })

        if (cep.length > 7) {
            const response = await this.buscaCep(cep);

            if (response.erro) {
                alert("CEP não encontrado! Por favor tente novamente");
            } else {
                this.setState({
                    cep: response.cep,
                    logradouro: response.logradouro,
                    bairro: response.bairro,
                    cidade: response.localidade,
                    uf: response.uf
                })
            }
        }
    }

    buscaCep = async (cep) => {
        const response = await fetch('https://viacep.com.br/ws/' + cep + '/json/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        return response.json();
    }

    resetFields = () => {
        this.setState({
            nome: '',
            sobrenome: '',
            email: '',
            emailCheck: '',
            dataDeNascimento: '',
            sexo: '',
            cep: '',
            logradouro: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            uf: '',
            senha: '',
            senhaCheck: ''
        });
    }

    submit = async () => {

        const requestBody = {
            "nome": this.state.nome,
            "sobrenome": this.state.sobrenome,
            "email": this.state.email,
            "dataDeNascimento": this.state.dataDeNascimento,
            "sexo": this.state.sexo,
            "cep": this.state.cep,
            "logradouro": this.state.logradouro,
            "numero": this.state.numero,
            "complemento": this.state.complemento,
            "uf": this.state.uf,
            "bairro": this.state.bairro,
            "cidade": this.state.cidade,
            "senha": this.state.senha
        }

        const requiredFields = this.validateRequiredFields(requestBody);

        if (requiredFields.length !== 0) {
            alert("Por favor preencha os campos obrigatórios");

        } else {
            const response = await this.createUser(requestBody);

            if (response.ok) {
                alert("Cadastro realizado com sucesso!");
                this.props.history.push('/login');
            } else {
                alert("Opa, aconteceu algo de errado!");
            }
        }
    }

    createUser = async (requestBody) => {
        const response = await fetch('http://localhost:8080/signup', {
            method: 'post',
            body: JSON.stringify(requestBody),
            headers: { 'Content-Type': 'application/json' },
        });

        return response;
    }

    validateRequiredFields = () => {
        const requiredFields = [];

        for (const key in this.state) {
            if (this.state[key] === "" &&
                key !== "emailCheck" &&     // Exceção
                key !== "senhaCheck" &&     // Exceção
                key !== "complemento") {    // Exceção
                requiredFields.push(key)
            }
        }

        return requiredFields;
    }
}

export default SignUp;