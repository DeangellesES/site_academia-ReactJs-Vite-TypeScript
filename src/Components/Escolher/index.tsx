import styled from "styled-components";

import { MdPeopleAlt } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import { IoMdTime } from "react-icons/io";

import { LiaDumbbellSolid } from "react-icons/lia";

const SecaoEscolher = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;  
    align-items: center;
    padding: 4rem;
    gap: 5rem;
`
const SecaoEscolherCaixaTitulo = styled.div`
    text-align: center;
`
const SecaoEscolherCaixaTituloTitulo = styled.h1`
    font-size: 3.8rem;
    font-weight: 800
`
const SecaoEscolherCaixaTituloParagrafo = styled.p`
    font-size: 1.3rem;
    width: 70%;
    margin: 0 auto;
    color: #70706bff;
`
const SecaoEscolherInformações = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.4rem;
`
const SecaoEscolherInformaçõesCaixaInterna = styled.div`
    // box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2); 
    border: 1px solid #cfcfceff;
    border-radius: 15px;
    text-align: center;
    padding: 2rem;
`
const SecaoEscolherInformaçõesTitulo = styled.h2`
    padding: .9rem 0;
`
const SecaoEscolherInformaçõesParagrafo = styled.p`
    color: #6b6b69ff;
    font-size: 1.2rem;
`
function Escolher() {
    return (
        <SecaoEscolher>
            <SecaoEscolherCaixaTitulo>
                <SecaoEscolherCaixaTituloTitulo>Por Que Escolher a Fit?</SecaoEscolherCaixaTituloTitulo>
                <SecaoEscolherCaixaTituloParagrafo>Oferecemos tudo o que você precisa para alcançar seus objetivos de forma eficiente e sustentável</SecaoEscolherCaixaTituloParagrafo>
            </SecaoEscolherCaixaTitulo>

            <SecaoEscolherInformações>
                <SecaoEscolherInformaçõesCaixaInterna>
                    <LiaDumbbellSolid className="escolher-caixa"/>
                    <SecaoEscolherInformaçõesTitulo>Equipamentos Premium</SecaoEscolherInformaçõesTitulo>
                    <SecaoEscolherInformaçõesParagrafo>Equipamentos de última geração das melhores marcas do mercado para seu treino ideal</SecaoEscolherInformaçõesParagrafo>
                </SecaoEscolherInformaçõesCaixaInterna>
                <SecaoEscolherInformaçõesCaixaInterna>
                    <MdPeopleAlt className="escolher-caixa"/>
                    <SecaoEscolherInformaçõesTitulo>Treinadores Especializados</SecaoEscolherInformaçõesTitulo>
                    <SecaoEscolherInformaçõesParagrafo>Equipe certificada e experiente para te acompanhar em cada etapa da sua jornada</SecaoEscolherInformaçõesParagrafo>
                </SecaoEscolherInformaçõesCaixaInterna>
                <SecaoEscolherInformaçõesCaixaInterna>
                    <GoTrophy className="escolher-caixa"/>
                    <SecaoEscolherInformaçõesTitulo>Resultados Comprovados</SecaoEscolherInformaçõesTitulo>
                    <SecaoEscolherInformaçõesParagrafo>Milhares de alunos que já transformaram suas vidas com nossa metodologia</SecaoEscolherInformaçõesParagrafo>
                </SecaoEscolherInformaçõesCaixaInterna>
                <SecaoEscolherInformaçõesCaixaInterna>
                    <IoMdTime className="escolher-caixa"/>
                    <SecaoEscolherInformaçõesTitulo>Horário Flexível</SecaoEscolherInformaçõesTitulo>
                    <SecaoEscolherInformaçõesParagrafo>Aberto 24h por dia, 7 dias por semana. Treine quando for melhor para você</SecaoEscolherInformaçõesParagrafo>
                </SecaoEscolherInformaçõesCaixaInterna>
            </SecaoEscolherInformações>
        </SecaoEscolher>
    )
}

export default Escolher