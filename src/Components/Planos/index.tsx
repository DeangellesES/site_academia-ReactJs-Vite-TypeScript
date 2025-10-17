import styled from "styled-components";

import { FaCheck } from "react-icons/fa6";

const SecaoPlanos = styled.section`
    background-color: #252525ff;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 4rem;
`
const SecaoPlanosTitulo = styled.h1`
    text-align: center;
    color: #fff;
    font-size: 3.7rem;
    font-family: "Open Sans", sans-serif;
    font-weight: 800;
    letter-spacing: -2px;
`
const SecaoPlanosParagrafo = styled.p`
    text-align: center;
    color: #fff;
    font-size: 1.3rem;
    width: 50%;
    margin: 0 auto;
`
const SecaoPlanosPlanos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto; 
    gap: 2rem;
    padding: 3rem 0;    
`
const SecaoPlanosPlanosCaixa = styled.div`
    background-color: #fff;
    width: fit-content;
    padding: 2rem;
    display: grid;
    // gap: 1rem;
    border-radius: 15px;
    width: 360px;
    height: 480px;
    padding: 2rem 2rem 4rem 2rem;
    transition: transform 0.5s;

    &:hover {
        transform: scale(1.1); 
    }

`
const SecaoPlanosPlanosCaixaPremium = styled.div`
    background-color: #fff;
    width: fit-content;
    padding: 2rem 2rem 4rem 2rem;
    display: grid;
    // gap: 1rem;
    border-radius: 15px;
    width: 360px;
    height: 480px;
    border: 2px solid #ff471a;
    position: relative;
    transition: transform 0.5s;

    &:hover {
        transform: scale(1.1); 
    }
`
const SecaoPlanosPlanosCaixaCategoria =styled.p`
    position: absolute;
    top: -2.5%;
    left: 28%;
    text-transform: uppercase;
    color: #fff;
    background-color: #ff471a;
    padding: .3rem 1rem;
    border-radius: 20px;
    font-weight: 900;
`
const SecaoPlanosPlanosCaixaTitulo = styled.h2`
    font-size: 1.5rem;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    letter-spacing: -2px;
`
const SecaoPlanosPlanosCaixaParagrafoUm = styled.p`
    color: #70706bff;
`
const SecaoPlanosPlanosCaixaParagrafoPreco = styled.p`
    font-size: 2.6rem;
    font-weight: 900;
    padding: 1rem 0;
    font-family: "BBH Sans Hegarty", sans-serif;
    font-style: normal;
`
const SecaoPlanosPlanosCaixaParagrafoDois = styled.p`
    color: #70706bff;
    font-size: 1.2rem;
`
const SecaoPlanosPlanosCaixaAncora = styled.a`
    width: 100%;
    border: 1px solid #a5a5a0ff;
    text-align: center;
    padding: .8rem 0;
    color: #70706bff;
    border-radius: 10px;
    text-decoration: none;
    font-size: 1.2rem;
    margin-top: 1.5rem;
    height: fit-content;
    transition: background-color 0.9s;

    &:hover {
        background-color: #ff471a;
        color: #fff;
    }
`
const SecaoPlanosPlanosCaixaAncoraPremium = styled.a`
    width: 100%;
    border: 1px solid #a5a5a0ff;
    text-align: center;
    padding: .8rem 0;
    color: #fff;
    border-radius: 10px;
    text-decoration: none;
    font-size: 1.2rem;
    margin-top: 1.5rem;
    background-color: #ff471a;
    font-weight: 900;
    height: fit-content;
    transition: transform 0.5s;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 0px 20px 3px #ff471a; 
    }
`
    
const SecaoPlanosUltimoParagrafo = styled.p`
    text-align: center;
    color: #cac7c7ff;
    font-size: 1.2rem;
`

function Planos() {
    return (
        <SecaoPlanos>
            <SecaoPlanosTitulo>Planos e Preços</SecaoPlanosTitulo>
            <SecaoPlanosParagrafo>Escolha o plano ideal para seus objetivos. Todos com acesso completo e sem taxa de matrícula</SecaoPlanosParagrafo>
            <SecaoPlanosPlanos>
                <SecaoPlanosPlanosCaixa>
                    <SecaoPlanosPlanosCaixaTitulo>Básico</SecaoPlanosPlanosCaixaTitulo>
                    <SecaoPlanosPlanosCaixaParagrafoUm>Perfeito para quem está começando</SecaoPlanosPlanosCaixaParagrafoUm>
                    <SecaoPlanosPlanosCaixaParagrafoPreco>R$ 99<span className="plano-preco">/mês</span></SecaoPlanosPlanosCaixaParagrafoPreco>
                    <SecaoPlanosPlanosCaixaParagrafoDois><FaCheck className="paragrafos-plano" />Acesso à área de musculação</SecaoPlanosPlanosCaixaParagrafoDois>
                    <SecaoPlanosPlanosCaixaParagrafoDois><FaCheck className="paragrafos-plano" />Avaliação física inicial</SecaoPlanosPlanosCaixaParagrafoDois>
                    <SecaoPlanosPlanosCaixaParagrafoDois><FaCheck className="paragrafos-plano" />Suporte online</SecaoPlanosPlanosCaixaParagrafoDois>
                    <SecaoPlanosPlanosCaixaParagrafoDois><FaCheck className="paragrafos-plano" />Armário individual</SecaoPlanosPlanosCaixaParagrafoDois>
                    <SecaoPlanosPlanosCaixaAncora href="">Assinar Agora</SecaoPlanosPlanosCaixaAncora>
                </SecaoPlanosPlanosCaixa>

                <SecaoPlanosPlanosCaixaPremium>
                    <SecaoPlanosPlanosCaixaCategoria>Mais Popular</SecaoPlanosPlanosCaixaCategoria>
                    <SecaoPlanosPlanosCaixaTitulo>Premium</SecaoPlanosPlanosCaixaTitulo>
                    <SecaoPlanosPlanosCaixaParagrafoUm>Nosso plano mais popular</SecaoPlanosPlanosCaixaParagrafoUm>
                    <SecaoPlanosPlanosCaixaParagrafoPreco>R$ 189<span className="plano-preco">/mês</span></SecaoPlanosPlanosCaixaParagrafoPreco>
                    <SecaoPlanosPlanosCaixaParagrafoDois><FaCheck className="paragrafos-plano" />Tudo do plano Básico</SecaoPlanosPlanosCaixaParagrafoDois>
                    <SecaoPlanosPlanosCaixaParagrafoDois><FaCheck className="paragrafos-plano" />Aulas coletivas ilimitadas</SecaoPlanosPlanosCaixaParagrafoDois>
                    <SecaoPlanosPlanosCaixaParagrafoDois><FaCheck className="paragrafos-plano" />Personal trainer 2x/semana</SecaoPlanosPlanosCaixaParagrafoDois>
                    <SecaoPlanosPlanosCaixaParagrafoDois><FaCheck className="paragrafos-plano" />Avaliação mensal</SecaoPlanosPlanosCaixaParagrafoDois>
                    <SecaoPlanosPlanosCaixaParagrafoDois><FaCheck className="paragrafos-plano" />Área de cardio premium</SecaoPlanosPlanosCaixaParagrafoDois>
                    <SecaoPlanosPlanosCaixaAncoraPremium href="">Assinar Agora</SecaoPlanosPlanosCaixaAncoraPremium>
                </SecaoPlanosPlanosCaixaPremium>
 
                <SecaoPlanosPlanosCaixa>
                    <SecaoPlanosPlanosCaixaTitulo>Elite</SecaoPlanosPlanosCaixaTitulo>
                    <SecaoPlanosPlanosCaixaParagrafoUm>Para resultados máximos</SecaoPlanosPlanosCaixaParagrafoUm>
                    <SecaoPlanosPlanosCaixaParagrafoPreco>R$ 299<span className="plano-preco">/mês</span></SecaoPlanosPlanosCaixaParagrafoPreco>
                    <SecaoPlanosPlanosCaixaParagrafoDois><FaCheck className="paragrafos-plano" />Tudo do plano Premium</SecaoPlanosPlanosCaixaParagrafoDois>
                    <SecaoPlanosPlanosCaixaParagrafoDois><FaCheck className="paragrafos-plano" />Personal trainer ilimitado</SecaoPlanosPlanosCaixaParagrafoDois>
                    <SecaoPlanosPlanosCaixaParagrafoDois><FaCheck className="paragrafos-plano" />Nutricionista dedicado</SecaoPlanosPlanosCaixaParagrafoDois>
                    <SecaoPlanosPlanosCaixaParagrafoDois><FaCheck className="paragrafos-plano" />Acesso a zona VIP</SecaoPlanosPlanosCaixaParagrafoDois>
                    <SecaoPlanosPlanosCaixaParagrafoDois><FaCheck className="paragrafos-plano" />Suplementação inclusa</SecaoPlanosPlanosCaixaParagrafoDois>
                    <SecaoPlanosPlanosCaixaParagrafoDois><FaCheck className="paragrafos-plano" />Spa e massagem</SecaoPlanosPlanosCaixaParagrafoDois>
                    <SecaoPlanosPlanosCaixaAncora href="">Assinar Agora</SecaoPlanosPlanosCaixaAncora>
                </SecaoPlanosPlanosCaixa>

            </SecaoPlanosPlanos>
            <SecaoPlanosUltimoParagrafo>* Todos os planos com cancelamento gratuito a qualquer momento</SecaoPlanosUltimoParagrafo>
        </SecaoPlanos>
    )
}

export default Planos