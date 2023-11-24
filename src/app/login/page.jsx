"use client";
import React, { useState } from 'react';
import style from './page.scss'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode adicionar a lógica de autenticação
    // por exemplo, validar as credenciais do usuário

    // Simplesmente exibindo as informações no console para demonstração
    console.log('Username:', username);
    console.log('Password:', password);

    // Lógica de autenticação aqui
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          
          <input
            type="text" placeholder='Email' required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
          />
        </label>
        <label>
          
          <input
            type="password" placeholder='Senha:' required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginForm;
