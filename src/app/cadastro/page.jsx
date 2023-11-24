"use client";
import style from './page.scss'
import React, { useState } from 'react';

const Cadastro = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [endereco, setEndereco] = useState('');
  const [nomeHospital, setNomeHospital] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [error, setError] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleCadastro = (event) => {
    event.preventDefault();

    const resultadoValidacao = validarCadastro(
      nomeCompleto,
      email,
      cnpj,
      endereco,
      nomeHospital,
      senha,
      confirmarSenha
    );

    if (!resultadoValidacao.sucesso) {
      setError(resultadoValidacao.mensagem);
      return;
    }

    
    console.log('Nome Completo:', nomeCompleto);
    console.log('Email:', email);
    console.log('CNPJ:', cnpj);
    console.log('Endereço:', endereco);
    console.log('Nome do Hospital:', nomeHospital);
    console.log('Senha:', senha);

 
    setNomeCompleto('');
    setEmail('');
    setCnpj('');
    setEndereco('');
    setNomeHospital('');
    setSenha('');
    setConfirmarSenha('');
    setError('');

   
    setEnviado(true);
  };

  const validarCadastro = (nome, email, cnpj, endereco, nomeHospital, senha, confirmarSenha) => {


    if (!nome || !email || !cnpj || !endereco || !nomeHospital || !senha || !confirmarSenha) {
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
    <div>

      <h1>CADASTRO</h1>
      {enviado ? (
        <p style={{ color: 'red' }}>Obrigado, o formulário foi preenchido!</p>
      ) : (
        <>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleCadastro}>
            <label>
              
              <input
                type="text" placeholder='Nome Completo:' required
                value={nomeCompleto}
                onChange={(e) => setNomeCompleto(e.target.value)}
              />
            </label>

            <label>
              
              <input
                type="email" placeholder='Email:' required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label>
              
              <input
                type="text" placeholder='CNPJ:' required
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
              />
            </label>

            <label>
              
              <input
                type="text" placeholder='Endereço:' required
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </label>

            <label>
              
              <input
                type="text" placeholder='Nome do Hospital:' required
                value={nomeHospital}
                onChange={(e) => setNomeHospital(e.target.value)}
              />
            </label>

            <label>
              
              <input
                type="password" placeholder='Senha:' required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </label>

            <label>
              
              <input
                type="password" placeholder='Confirmar Senha:' required
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
