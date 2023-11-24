import Cabecalho from "@/components/cabecalho/page"
import './globals.scss'
import Image from "next/image"
import Link from "next/link";
import Rodape from "@/components/rodape/Rodape"



export const metadata = {
  title: 'Global Solution',
  description: '',
}

export default function RootLayout({ children }) {
 return (
    <html lang="pt-br">
      <body>
        <Cabecalho/>
        <div class="div">
          <div class="logo">
            <image src="../assets/img/Texto_do_seu_parágrafo-removebg-preview.png" alt="Logo do Site"> </image>
            
          </div>
        </div>

        {children}
        <Rodape/>
      </body>
    </html>
  )
}
