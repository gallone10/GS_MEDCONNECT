"use client";
import React, { useState } from 'react';
import styles from './page.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Lógica de autenticação aqui
    console.log('Email:', email);
    console.log('Senha:', senha);

    // Exemplo de verificação simples (substitua por lógica real)
    if (email === 'usuario@example.com' && senha === 'senha123') {
      setError('');
      alert('Login bem-sucedido!');
    } else {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleLogin}>
        <h2 className={styles.title}>Login</h2>

        <label htmlFor="email" className={styles.label}>
          Email:
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </label>

        <label htmlFor="senha" className={styles.label}>
          Senha:
          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className={styles.input}
          />
        </label>

        <button type="submit" className={styles.button}>
          Entrar
        </button>

        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
