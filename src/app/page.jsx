import Image from 'next/image';
import Link from 'next/link';
import style from '../app/page.scss'

const HomePage = () => {
  return (
    
    <div>
      <h1>Relógio IoT para Monitoramento de Sinais Vitais</h1>
      <p>
        Bem-vindo à nossa aplicação que apresenta informações sobre um relógio IoT que monitora os sinais vitais de pacientes.
      </p>
      {/* <img src= "../assets/relogio.jpg" alt="Relógio IoT"/> */}
      <p>
        Este relógio é usado pelos médicos para monitorar os sinais vitais dos pacientes de forma conveniente.
      </p>
      <Link href="/about">
        Saiba mais sobre o relógio IoT
      </Link>
      
    </div>
  );
};

export default HomePage;
