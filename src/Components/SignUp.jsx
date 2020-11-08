import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Paper, TextField, Select, InputLabel, Divider, Button } from '@material-ui/core';
import '../Styles/signup.css';

export default function SignUp() {      // FUNCTIONAL COMPONENT USADO PARA DEMONSTRAÇÃO

    // VARIÁVEIS
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
    const [uf, setUf] = useState("");
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
        setUf("");
        setBairro("");
        setCidade("");
        setSenha("");
        setSenhaCheck("");
        setEmail("");
        setEmailCheck("");
    }

    const { register } = useForm();
    //debug const { handleSubmit } = useForm();
    //debug const submitLog = (data) => console.log(data);

    // MÉTODOS
    const cepHandler = async (arg) => {
        setCep(arg.target.value.replace(/[^0-9]+/g, ''));

        if (arg.target.value.length > 7) {
            const response = await buscaCep(parseInt(arg.target.value));

            setCep(response.cep);
            setLogradouro(response.logradouro);
            setBairro(response.bairro);
            setCidade(response.localidade);
            setUf(response.uf);
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

    const submitHandler = () => {
        //debug handleSubmit(submitLog);
    }

    return (
        <div className="su-container">
            <Paper elevation={3}>
                <form onSubmit={submitHandler}>
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
                                    onChange={cepHandler}
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
                                <InputLabel htmlFor="uf" required>UF</InputLabel>
                                <Select
                                    required
                                    native
                                    className="su-input-micro"
                                    inputRef={register}
                                    name="uf"
                                    value={uf}
                                    onChange={arg => setUf(arg.target.value)}
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
                                    required
                                    className="su-input1"
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
                                    className="su-input1"
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
                            {/* debug <Button variant="contained" onClick={handleSubmit(submitLog)} color="primary"> Confirmar </Button>*/}
                            <Button variant="contained" type="submit" color="primary"> Confirmar </Button>
                        </div>
                    </div>
                </form>
            </Paper >
        </div >

    );
}
