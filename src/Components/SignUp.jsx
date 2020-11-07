import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Paper, TextField, Select, InputLabel, Divider, Button } from '@material-ui/core';
import '../Styles/signup.css';

export default function SignUp() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [emailCheck, setEmailCheck] = useState("");
    const [dataDeNascimento, setDataDeNascimento] = useState("");
    const [sexo, setSexo] = useState("");
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaCheck, setSenhaCheck] = useState("");

    const reset = () => {
        setNome("");
        setSobrenome("");
        setEmail("");
        setDataDeNascimento("");
        setSexo("");
        setCep("");
        setLogradouro("");
        setNumero("");
        setComplemento("");
        setBairro("");
        setCidade("");
        setSenha("");
        setSenhaCheck("");
        setEmail("");
        setEmailCheck("");
    }

    const updateCep = async (arg) => {

        setCep(arg.target.value);

        if (arg.target.value.length === 8) {
            const response = await buscaCep(parseInt(arg.target.value));

            setCep(response.cep);
            setLogradouro(response.logradouro);
            setBairro(response.bairro);
            setCidade(response.localidade);


            console.log(response);
        }

    }

    const buscaCep = async (cep) => {

        const response = await fetch("https://viacep.com.br/ws/" + cep + "/json/", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        return response.json();
    }

    const { register, handleSubmit } = useForm();
    const submitLog = (data) => console.log(data);

    return (
        <div className="su-container">
            <Paper elevation={3}>
                <form onSubmit={() => {
                    handleSubmit(submitLog);

                }}>
                    <div className="su-box">
                        <div className="su-box-title">Dados pessoais</div>
                        <Divider />
                        <div className="su-box-top-row">
                            <div>
                                <TextField
                                    required
                                    className="su-input2"
                                    id="standard-basic"
                                    label="Primeiro nome"
                                    type="text"
                                    inputRef={register}
                                    name="nome"
                                    value={nome}
                                    onChange={arg => setNome(arg.target.value)}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    className="su-input2"
                                    id="standard-basic"
                                    label="Sobrenome"
                                    type="text"
                                    inputRef={register}
                                    name="sobrenome"
                                    value={sobrenome}
                                    onChange={arg => setSobrenome(arg.target.value)}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    className="su-input3"
                                    id="standard-basic"
                                    label="E-mail"
                                    type="text"
                                    inputRef={register}
                                    name="email"
                                    value={email}
                                    onChange={arg => setEmail(arg.target.value)}
                                />
                            </div>
                        </div>
                        <div className="su-box-mid-row">
                            <div>
                                <TextField
                                    required
                                    className="su-input2"
                                    id="date"
                                    label="Data de Nascimento"
                                    type="date"
                                    inputRef={register}
                                    name="dataDeNascimento"
                                    value={dataDeNascimento}
                                    onChange={arg => setDataDeNascimento(arg.target.value)}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="sexo" required>Sexo</InputLabel>
                                <Select
                                    required
                                    native
                                    className="su-input2"
                                    inputRef={register}
                                    name="sexo"
                                    value={sexo}
                                    onChange={arg => setSexo(arg.target.value)}
                                    inputProps={{ id: 'sexo' }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={"Masculino"}>Masculino</option>
                                    <option value={"Feminino"}>Feminino</option>
                                    <option value={"Outro"}>Outro</option>
                                </Select>
                            </div>
                            <div>
                                <TextField
                                    required
                                    className="su-input3"
                                    id="standard-basic"
                                    label="Confirme seu E-mail"
                                    type="text"
                                    value={emailCheck}
                                    onChange={arg => setEmailCheck(arg.target.value)}
                                />
                            </div>
                        </div>
                        <div className="su-box-title">Endereço</div>
                        <Divider />
                        <div className="su-box-top-row">
                            <div>
                                <TextField
                                    required
                                    className="su-input"
                                    id="standard-basic"
                                    label="CEP"
                                    placeholder="12345000"
                                    type="text"
                                    inputProps={{ maxLength: 8 }}
                                    inputRef={register}
                                    name="cep"
                                    value={cep}
                                    onChange={updateCep}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    className="su-input3"
                                    id="standard-basic"
                                    label="Logradouro"
                                    placeholder="Av. Paulista"
                                    type="text"
                                    inputRef={register}
                                    name="logradouro"
                                    value={logradouro}
                                    onChange={arg => setLogradouro(arg.target.value)}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    className="su-input"
                                    id="standard-basic"
                                    label="Número"
                                    placeholder="999"
                                    type="text"
                                    inputRef={register}
                                    name="numero"
                                    value={numero}
                                    onChange={arg => setNumero(arg.target.value)}
                                />
                            </div>
                            <div>
                                <TextField
                                    className="su-input1"
                                    id="standard-basic"
                                    label="Complemento"
                                    placeholder="Ap. 123"
                                    inputRef={register}
                                    name="complemento"
                                    value={complemento}
                                    onChange={arg => setComplemento(arg.target.value)}
                                />
                            </div>
                        </div>
                        <div className="su-box-mid-row">
                            <div>
                                <TextField
                                    required
                                    className="su-input2"
                                    id="standard-basic"
                                    label="Bairro"
                                    type="text"
                                    inputRef={register}
                                    name="bairro"
                                    value={bairro}
                                    onChange={arg => setBairro(arg.target.value)}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    className="su-input1"
                                    id="standard-basic"
                                    label="Cidade"
                                    type="text"
                                    inputRef={register}
                                    name="cidade"
                                    value={cidade}
                                    onChange={arg => setCidade(arg.target.value)}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    className="su-input2"
                                    id="standard-basic"
                                    label="Sua senha"
                                    type="password"
                                    inputRef={register}
                                    name="senha"
                                    value={senha}
                                    onChange={arg => setSenha(arg.target.value)}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    className="su-input2"
                                    id="standard-basic"
                                    label="Confirme sua senha"
                                    type="password"
                                    inputRef={register}
                                    name="password"
                                    value={senhaCheck}
                                    onChange={arg => setSenhaCheck(arg.target.value)}
                                />
                            </div>
                        </div>
                        <div className="su-button-section">
                            <div className="su-button-reset">
                                <Button variant="contained" type="reset" color="secondary" onClick={reset}> Limpar </Button>
                            </div>
                            <Button variant="contained" type="submit" color="primary"> Confirmar </Button>
                        </div>
                    </div>
                </form>
            </Paper >
        </div >

    );
}
