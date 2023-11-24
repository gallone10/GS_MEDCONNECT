import Link from "next/link";
import Image from "next/image";
import style from './page.scss'


export default function Cabecalho() {
  return (
    <header className='cabecalho'>
      <div className="imagem">
        <Image src="/logo.png"alt= "logo" 
        width={300} height={100}></Image>
      </div>
    <nav className="menu">
      <Link href="/">HOME</Link>
      <Link href="/produto">PRODUTO</Link>
      <Link href="/cadastro">CADASTRO</Link>
      <Link href="/sobre-nos" >SOBRE NOS</Link>
    </nav>
  </header>
  )
}