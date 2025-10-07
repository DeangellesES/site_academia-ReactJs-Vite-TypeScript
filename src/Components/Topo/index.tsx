import styled from "styled-components";

import imgTopo from "./assets/treino-pessoas.jpg"

import { FaArrowRight } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";


const SecaoTopo = styled.section`
    background-image: url(${imgTopo});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
`

const SecaoTopoFundo = styled.div`
    background-color: rgba(29, 17, 17, 0.62);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;  
    align-items: center;
    padding: 0 11rem;
    text-align: center;
    gap: 2.8rem;
`
const SecaoTopoTitulo = styled.h1`
    font-size: 6.6rem;
    color: #fff;
    font-weight: 800;
`
const SecaoTopoParagrafo = styled.p`
    color: #fff;
    font-size: 1.5rem;
    width: 60%;
`
const SecaoTopoCaixaLinks = styled.div`
    display: flex;
    gap: .8rem;
`
const SecaoTopoLinkUm = styled.a`
    color: #fff;
    background-color: #ff471a;
    padding: 1rem 2.5rem;
    border-radius: 12px;
    font-weight: 800;
    font-size: 1.3rem;
    display: flex;
    gap: 1rem;
    align-items: center;
`
const SecaoTopoLinkDois = styled.a`
    display: flex;
    color: #fff;
    gap: 1rem;
    font-size: 1.3rem;
    align-items: center;
    border-radius: 12px;
    border: 1px solid #ff5c33;
    padding: 1rem 2.5rem;
    background-color: rgba(66, 63, 63, 0.36);
`
const SecaoTopoDados = styled.div`
    display: flex;
    color: #fff;
    justify-content: space-around;
    gap: 13rem;
    text-transform: uppercase;
`
const SecaoTopoDadosNumero = styled.p`
    font-size: 2.2rem;
    font-weight: 900;
`
const SecaoTopoDadosParagrafo = styled.p`
    font-weight: 100;
    padding-top: .8rem;
`

function Topo() {
    return (
        <SecaoTopo>
            <SecaoTopoFundo>
                <SecaoTopoTitulo>Transforme Seu <span className="titulo-topo">Corpo e Mente</span> </SecaoTopoTitulo>
                <SecaoTopoParagrafo>Academia premium com equipamentos de última geração, treinadores especializados e ambiente motivador para você alcançar seus objetivos</SecaoTopoParagrafo>
                <SecaoTopoCaixaLinks>
                    <SecaoTopoLinkUm>Comece Agora <FaArrowRight className="seta-link"/> </SecaoTopoLinkUm>
                    <SecaoTopoLinkDois><CiPlay1 className="seta-link"/> Conheça a Academia</SecaoTopoLinkDois>
                </SecaoTopoCaixaLinks>

                <SecaoTopoDados>
                    <div>
                        <SecaoTopoDadosNumero>1000+</SecaoTopoDadosNumero>
                        <SecaoTopoDadosParagrafo>Alunos Ativos</SecaoTopoDadosParagrafo>
                    </div>
                    <div>
                        <SecaoTopoDadosNumero>15+</SecaoTopoDadosNumero>
                        <SecaoTopoDadosParagrafo>Treinadores</SecaoTopoDadosParagrafo>
                    </div>
                    <div>
                        <SecaoTopoDadosNumero>500m²</SecaoTopoDadosNumero>
                        <SecaoTopoDadosParagrafo>De Área</SecaoTopoDadosParagrafo>
                    </div>
                </SecaoTopoDados>
            </SecaoTopoFundo>
        </SecaoTopo>
    )
}

export default Topo