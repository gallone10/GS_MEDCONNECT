import Image from 'next/image';
import Link from 'next/link';
import style from './page.scss'

const HomePage = () => {
  return (
  <div className='pagina'>
    <div className='smart'>
      <div className='imagemrelogio'>
        <Image src="/smart2.png" alt= "Smart" 
        width={200} height={200}></Image>
      </div>
          <div className='DescrSmart'>
            <p> SMART WATCH. A IoT revolucionaria de medicina, salvamos pacientes com nossa tecnologia! Monitoramento fácil e pratico para os profissionais da saúde. Fornecemos para empresas de todo o mundo, se junto conosco para um mundo melhor!</p>
          </div>
    </div>

      <div className='smart'>
        <div className='imagemrelogio'>
          <Image src="/relogio2.jpg" alt= "relogio" 
          width={200} height={200}></Image>
        </div>
          <div className='DescrSmart'>
            <p> Fornecemos um equipamento de qualidade que capacita os profissionais da saúde a ter um monitoramento em tempo real dos seus pacientes, assim diminuindo os riscos de acidentes e facilitando o pronto atendimento.  O nosso produto consiste em uma IoT (smart watch). O funcionamento do MedWatch é fácil e prático, o seu sistema estará integrado com o do hospital e possui funcionalidades como monitorar os sinais vitais do paciente, cadastrar, atualizar e excluir pacientes.</p>
          </div>
    </div>
  </div>
  );
};

export default HomePage;
