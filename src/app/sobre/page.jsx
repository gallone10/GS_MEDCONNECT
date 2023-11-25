import Head from 'next/head';
import style from './page.module.css'

const About = () => {
  return (
    <>
      <Head>
        <title>Sobre Nós - MedConnect</title>
        <meta name="description" content="Conheça mais sobre a MedConnect e nosso inovador relógio IoT para monitoramento médico." />
      </Head>

      <div className="about-container">
        <h1>Sobre a MedConnect</h1>
        <p>Bem-vindo à MedConnect, líder em inovação na área da saúde por meio de tecnologia avançada.</p>

        <h2>Nossa Missão</h2>
        <p>Nossa missão na MedConnect é revolucionar a forma como os profissionais de saúde monitoram e cuidam de seus pacientes. Acreditamos que a tecnologia pode desempenhar um papel crucial na promoção da saúde e no diagnóstico precoce.</p>

        <h2>O Relógio MedConnect</h2>
        <p>O coração da nossa inovação é o Relógio MedConnect, um dispositivo de Internet das Coisas (IoT) criado para médicos comprometidos com a excelência no cuidado do paciente.</p>
        <p>Equipado com sensores avançados, nosso relógio é capaz de monitorar todos os sinais vitais, incluindo glicose, proporcionando uma visão abrangente do estado de saúde do paciente.</p>

        <h2>Como Funciona</h2>
        <p>O Relógio MedConnect, quando usado no pulso do médico, estabelece uma conexão contínua com os dados do paciente. Caso seja detectada alguma anomalia nos sinais vitais ou na glicose, o relógio notifica imediatamente o médico, permitindo uma intervenção rápida e eficaz.</p>

        <h2>Compromisso com a Saúde</h2>
        <p>Estamos comprometidos em capacitar os profissionais de saúde com as ferramentas mais avançadas, garantindo que cada paciente receba cuidados personalizados e de alta qualidade.</p>

        <p>Na MedConnect, acreditamos que o futuro da saúde está na interseção entre a medicina e a tecnologia, e estamos dedicados a liderar esse caminho.</p>
      </div>
    </>
  );
};

export default About;
