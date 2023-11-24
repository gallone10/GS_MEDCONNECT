import React from 'react'
import Image from 'next/image'

export default function Produto() {
  return (
    <div className='principal'>
        <h1>A MedConnect conecta a medicina à tecnologia!</h1>
        <div className='intro'>
            <p>
              Fornecemos um equipamento de qualidade que capacita os profissionais da saúde a ter um monitoramento em tempo real dos seus pacientes, assim diminuindo os riscos de acidentes e facilitando o pronto atendimento.
            </p>
        </div>
       
        <div className='produto'>
            <p>
                O nosso produto consiste em uma IoT (smart watch). O funcionamento do MedWatch é fácil e prático, o seu sistema estará integrado com o do hospital e possui funcionalidades como monitorar os sinais vitais do paciente, cadastrar, atualizar e excluir pacientes. 
            </p>
        </div>

    </div>
  )
}
