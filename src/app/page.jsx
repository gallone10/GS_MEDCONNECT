import Image from 'next/image';
import Link from 'next/link';
import style from '../app/page.scss'

const HomePage = () => {
  return (
    
    <div className='fundo'>

      <Link href="/about">
        Saiba mais sobre o relógio IoT
      </Link>
    </div>
  );
};

export default HomePage;
