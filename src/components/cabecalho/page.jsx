import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className='cabecalho'>
    <nav>
      <Link href="/">HOME</Link>
      <Link href="/produtos">PRODUTOS</Link>
      <Link href="/cadastro">CADASTRO</Link>
      <Link href="/sobre-nos" >SOBRE NOS</Link>
    </nav>
  </header>
  )
}