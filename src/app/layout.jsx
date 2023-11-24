import Cabecalho from "@/components/cabecalho/page"
import './globals.scss'
import Image from "next/image"
import Link from "next/link";




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
      
        </div>

        {children}
        
      </body>
    </html>
  )
}
