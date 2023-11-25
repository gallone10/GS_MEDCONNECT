"use client";
import React, { useState } from 'react';
import styles from './page.module.css'; // Importe o arquivo CSS

const Cadastro = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [error, setError] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleCadastro = (event) => {
    event.preventDefault();
    const handleSubmit = async (e)=>{
      e.preventDefault();

      //Variável que será utilizada fora do contexto de tratamento:
      let user;

      try {
        const response = await fetch("http://localhost:8080/ProjectGs/WEB-INF/classes/br/com/fiap/services/ViaPacienteServices.java",{
          method:"POST",
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuario),
        });

        if(response.ok){
          const data = response.json();

          if(data){
            alert("LOGIN REALIZADO COM SUCESSO!")
          }else{
            alert("SENHA E OU USUAÁRIOS INVÁLIDOS!")
          }

        }

    }catch(error){
      console.error(error);
    }
  }

    const resultadoValidacao = validarCadastro(
      nomeCompleto,
      email,
      endereco,
      cnpj,
      senha,
      confirmarSenha
    );

    if (!resultadoValidacao.sucesso) {
      setError(resultadoValidacao.mensagem);
      return;
    }

    // Lógica de envio do formulário ou outras ações necessárias
    console.log('Nome Completo:', nomeCompleto);
    console.log('Email:', email);
    console.log('Endereço:', endereco);
    console.log('CNPJ:', cnpj);
    console.log('Senha:', senha);

    // Limpar os campos e resetar o estado
    setNomeCompleto('');
    setEmail('');
    setEndereco('');
    setCnpj('');
    setSenha('');
    setConfirmarSenha('');
    setError('');
    setEnviado(true);
  };

  const validarCadastro = (nome, email, endereco, cnpj, senha, confirmarSenha) => {
    if (!nome || !email || !endereco || !cnpj || !senha || !confirmarSenha) {
      return {
        sucesso: false,
        mensagem: 'Todos os campos devem ser preenchidos.',
      };
    }

    if (senha !== confirmarSenha) {
      return {
        sucesso: false,
        mensagem: 'As senhas não coincidem.',
      };
    }

    return {
      sucesso: true,
      mensagem: '',
    };
  };

  return (
    <div className={styles.container}>
      <h1>CADASTRO</h1>
      {enviado ? (
        <p>Obrigado, o formulário foi preenchido!</p>
      ) : (
        <>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleCadastro}>
            <label>
              Nome Completo:
              <input
                type="text"
                placeholder="Digite seu nome completo"
                value={nomeCompleto}
                onChange={(e) => setNomeCompleto(e.target.value)}
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label>
              Endereço:
              <input
                type="text"
                placeholder="Digite seu endereço"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </label>

            <label>
              CNPJ:
              <input
                type="text"
                placeholder="Digite seu CNPJ"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
              />
            </label>

            <label>
              Senha:
              <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </label>

            <label>
              Confirmar Senha:
              <input
                type="password"
                placeholder="Confirme sua senha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
            </label>

            <button type="submit">Cadastrar</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Cadastro;
