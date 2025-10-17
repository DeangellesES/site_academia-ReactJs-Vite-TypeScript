import styled from "styled-components";

import imgTopo from "./assets/treino-pessoas.jpg"

import { FaArrowRight } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";

import { useState, useEffect } from 'react';


const SecaoTopo = styled.section`
    background-image: url(${imgTopo});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
`
const SecaoTopoFundo = styled.div`
    background: radial-gradient(rgba(29, 17, 17, 0.06), rgba(0, 0, 0, 1));
    // background-color: rgba(29, 17, 17, 0.62);
    // background-color: rgba(29, 17, 17, 0.62);
    height: 100%;
`
const SecaoTopoOrganizar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;  
    align-items: center;
    padding: 0 11rem;
    text-align: center;
    gap: 2.8rem;
`
const SecaoTopoTitulo = styled.h1`
    font-size: 5.5rem;
    color: #fff;
    font-weight: 800;
    font-family: "BBH Sans Hegarty", sans-serif;
    font-style: normal;
    letter-spacing: 0.2rem;
`
const SecaoTopoParagrafo = styled.p`
    color: #fff;
    font-size: 1.5rem;
    width: 60%;
`
const SecaoTopoCaixaLinks = styled.div`
    display: flex;
    gap: 2rem;
`
const SecaoTopoLinkUm = styled.a`
    color: #fff;
    background-color: #ff471a;
    padding: 1rem 2.5rem;
    border-radius: 12px;
    font-weight: 900;
    font-size: 1.3rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    cursor: pointer;
    transition: transform 0.5s;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 40px 0 #ff471a;
    }
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
    background-color: rgba(66, 63, 63, 0.48);
    cursor: pointer;
    transition: transform 0.5s;

     &:hover {
        background-color: rgba(66, 63, 63, 0.28);
    }
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

function mouseScroll() {
    const scroll = document.querySelectorAll('.js-scroll')
    const height = window.innerHeight * 0.6
    scroll[0].classList.add('ativo')
    scroll.forEach((section) => {
        const sectionTop = (section.getBoundingClientRect().top - height) < 0
        if (sectionTop) {
            section.classList.add('ativo')
        }
    })
}

window.addEventListener('scroll', mouseScroll)


function Topo() {
    // CONTADOR UM
    const [contador, setContador] = useState(1);
    const limite = 1000;

    useEffect(() => {
        // Só cria o intervalo se contador for menor ou igual ao limite
        if (contador <= limite) {
            const intervalo = setInterval(() => {
                setContador((prev) => prev + 1);
            }, -1);

            // Limpa o intervalo quando o componente for desmontado ou contador mudar
            return () => clearInterval(intervalo);
        }
    }, [contador]);

    // CONTADOR DOIS
    const [contadorUm, setContadorUm] = useState(1);
    const limiteUm = 15;

    useEffect(() => {
        // Só cria o intervalo se contador for menor ou igual ao limite
        if (contadorUm <= limiteUm) {
            const intervalo = setInterval(() => {
                setContadorUm((prev) => prev + 1);
            }, 100);

            // Limpa o intervalo quando o componente for desmontado ou contador mudar
            return () => clearInterval(intervalo);
        }
    }, [contadorUm]);

    // CONTADOR TRES
    const [contadorDois, setContadorDois] = useState(1);
    const limiteDois = 500;

    useEffect(() => {
        // Só cria o intervalo se contador for menor ou igual ao limite
        if (contadorUm <= limiteDois) {
            const intervalo = setInterval(() => {
                setContadorDois((prev) => prev + 1);
            }, 1);

            // Limpa o intervalo quando o componente for desmontado ou contador mudar
            return () => clearInterval(intervalo);
        }
    }, [contadorDois]);

    return (
        <SecaoTopo >
            <SecaoTopoFundo >
                <SecaoTopoOrganizar className="js-scroll">
                    <SecaoTopoTitulo>Transforme Seu <span className="titulo-topo">Corpo e Mente</span> </SecaoTopoTitulo>
                    <SecaoTopoParagrafo>Academia premium com equipamentos de última geração, treinadores especializados e ambiente motivador para você alcançar seus objetivos</SecaoTopoParagrafo>
                    <SecaoTopoCaixaLinks>
                        <SecaoTopoLinkUm>Comece Agora <FaArrowRight className="seta-link" /> </SecaoTopoLinkUm>
                        <SecaoTopoLinkDois><CiPlay1 className="seta-link" /> Conheça a Academia</SecaoTopoLinkDois>
                    </SecaoTopoCaixaLinks>

                    <SecaoTopoDados>
                        <div>

                            <SecaoTopoDadosNumero>{contador <= limite ? contador : limite}+</SecaoTopoDadosNumero>
                            <SecaoTopoDadosParagrafo>Alunos Ativos</SecaoTopoDadosParagrafo>
                        </div>
                        <div>
                            <SecaoTopoDadosNumero>{contadorUm <= limiteUm ? contadorUm : limiteUm}+</SecaoTopoDadosNumero>
                            <SecaoTopoDadosParagrafo>Treinadores</SecaoTopoDadosParagrafo>
                        </div>
                        <div>
                            <SecaoTopoDadosNumero>{contadorDois <= limiteDois ? contadorDois : limiteDois}m²</SecaoTopoDadosNumero>
                            <SecaoTopoDadosParagrafo>De Área</SecaoTopoDadosParagrafo>
                        </div>
                    </SecaoTopoDados>
                </SecaoTopoOrganizar>

            </SecaoTopoFundo>
        </SecaoTopo>
    )
}

export default Topo