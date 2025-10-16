import styled from "styled-components";

import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";


const SecaoSobre = styled.section`
    padding: 4rem 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    gap: 3rem;
`
const SecaoSobreEsquerda = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const SecaoSobreEsquerdoTitulo = styled.h1`
    font-size: 3.5rem;
    font-weight: 600;
`
const SecaoSobreEsquerdoParagrafo = styled.p`
    font-size: 1.3rem;
    color: #70706bff;
`
const SecaoSobreEsquerdoBtn = styled.a`
    background-color: #ff471a;
    width: fit-content;
    height: fit-content;
    color: #fff;
    padding: 1rem 3.5rem;
    border-radius: 10px;
    font-size: 1.3rem;
    font-weight: 600;
    text-decoration: none;
    margin-top: 1.1rem;
    text-transform: capitalize;
`
const SecaoSobreDireita = styled.div`
    display: grid;
    gap: 2rem;
`
const SecaoSobreDireitaCima = styled.div`
    color: #fff;
    background-color: #252525ff;
    padding: 2rem 1.7rem;
    border-radius: 13px;
    display: grid;
    gap: 1rem;
`
const SecaoSobreDireitaCimaTitulo = styled.h2`
    font-size: 1.9rem;
`
const SecaoSobreDireitaCimaCaixa = styled.div`
    display: flex;
    gap: 1rem;
`
const SecaoSobreDireitaCimaCaixaParagrafo = styled.p`
    font-size: 1.2rem;
    margin: .3rem 0;
    color: #cecacaff;
`
const SecaoSobreDireitaBaixo = styled.div`
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, .4);
    padding: 2rem 1.5rem;
    border-radius: 13px;
    display: flex;
    flex-direction: column;
    gap: .5rem;
`
const SecaoSobreDireitaBaixoCaixa = styled.div`
    display: flex;
    justify-content: space-between;
    color: #70706bff;
`

export default function Sobre() {
    return (
        <SecaoSobre>
            <SecaoSobreEsquerda>
                <SecaoSobreEsquerdoTitulo>Sobre a Fit Academy</SecaoSobreEsquerdoTitulo>
                <SecaoSobreEsquerdoParagrafo>Há mais de 10 anos transformando vidas através do fitness. Nossa missão é proporcionar um ambiente motivador onde cada pessoa pode alcançar seu potencial máximo.</SecaoSobreEsquerdoParagrafo>
                <SecaoSobreEsquerdoParagrafo>Contamos com uma equipe de profissionais altamente qualificados, equipamentos de última geração e uma metodologia comprovada que já ajudou milhares de alunos a conquistarem seus objetivos.</SecaoSobreEsquerdoParagrafo>
                <SecaoSobreEsquerdoParagrafo>Seja você um iniciante ou um atleta experiente, temos o programa perfeito para você. Venha fazer parte da nossa comunidade e comece sua transformação hoje mesmo!</SecaoSobreEsquerdoParagrafo>
                <SecaoSobreEsquerdoBtn href="">Agende uma visita gratuita</SecaoSobreEsquerdoBtn>
            </SecaoSobreEsquerda>

            <SecaoSobreDireita>
                <SecaoSobreDireitaCima>
                    <SecaoSobreDireitaCimaTitulo>Entre em Contato</SecaoSobreDireitaCimaTitulo>
                    <SecaoSobreDireitaCimaCaixa>
                        <CiLocationOn className="sobre-localizacao"/>
                        <div>
                            <h3>Endereço</h3>
                            <SecaoSobreDireitaCimaCaixaParagrafo>Av. Principal, 1234</SecaoSobreDireitaCimaCaixaParagrafo>
                            <SecaoSobreDireitaCimaCaixaParagrafo>Centro - São Paulo, SP</SecaoSobreDireitaCimaCaixaParagrafo>
                        </div>
                    </SecaoSobreDireitaCimaCaixa>
                    <SecaoSobreDireitaCimaCaixa>
                        <FaPhone className="sobre-localizacao"/>
                        <div>
                            <h3>Telefone</h3>
                            <SecaoSobreDireitaCimaCaixaParagrafo>(11) 99999-9999</SecaoSobreDireitaCimaCaixaParagrafo>
                        </div>
                    </SecaoSobreDireitaCimaCaixa>
                    <SecaoSobreDireitaCimaCaixa>
                        <MdOutlineEmail className="sobre-localizacao"/>
                        <div>
                            <h3>Email</h3>
                            <SecaoSobreDireitaCimaCaixaParagrafo>contato@fitacademy.com</SecaoSobreDireitaCimaCaixaParagrafo>
                        </div>
                    </SecaoSobreDireitaCimaCaixa>
                </SecaoSobreDireitaCima>

                <SecaoSobreDireitaBaixo>
                    <h2>Horário de Funcionamento</h2>
                    <SecaoSobreDireitaBaixoCaixa>
                        <p>Segunda a Sexta</p>
                        <p>24 horas</p>
                    </SecaoSobreDireitaBaixoCaixa>
                    <SecaoSobreDireitaBaixoCaixa>
                        <p>Sábado</p>
                        <p>24 horas</p>
                    </SecaoSobreDireitaBaixoCaixa>
                    <SecaoSobreDireitaBaixoCaixa>
                        <p>Domingo</p>
                        <p>24 horas</p>
                    </SecaoSobreDireitaBaixoCaixa>
                </SecaoSobreDireitaBaixo>

            </SecaoSobreDireita>
        </SecaoSobre>
    )
}

