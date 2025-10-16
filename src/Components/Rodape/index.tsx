import styled from "styled-components";

import { LiaDumbbellSolid } from "react-icons/lia";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";

const SecaoRodape = styled.footer`
    display: flex;
    gap: 2rem;
    padding: 3rem;
    background-color: #252525ff;
    color: #fff;
    flex-direction: column;
`
const SecaoRodapeContainer = styled.div`
    display: grid;
    grid-template-columns: 600px 1fr 1fr;
    gap: 4rem;
`

const SecaoRodapeCaixa = styled.div`
    
`
const SecaoRodapeCaixaTitulo = styled.div`
    display: flex;
    align-items: center;
    gap: .6rem;
    margin-bottom: 1rem;
`
const SecaoRodapeTitulo = styled.h2`
    font-size: 1.8rem;
    font-weight: 600;
    
`
const SecaoRodapeCaixaParagrafo = styled.p`
    font-size: 1.2rem;
    color: #bebebeff;
    margin-bottom: 1rem;
`
const SecaoRodapeCaixaItem = styled.li`
    list-style: none;
    margin-top: .6rem;
`

const SecaoRodapeCaixaLink = styled.a`
    color: #bebebeff;
    text-decoration: none;
    font-size: 1.2rem;
`
const SecaoRodapeCaixaContato = styled.p`
    color: #bebebeff;
    text-decoration: none;
    font-size: 1.2rem;
    margin-top: .6rem;
`
const SecaoRodapeDireitos = styled.p`
    color: #bebebeff;
    text-decoration: none;
    font-size: 1.2rem;
    margin-top: .6rem;
    text-align: center;
    border-top: 1px solid #bebebeff;
    padding-top: 2rem;
`

export default function Rodape() {
    return (
        <SecaoRodape>
            <SecaoRodapeContainer>
                <SecaoRodapeCaixa>
                    <SecaoRodapeCaixaTitulo>
                        <LiaDumbbellSolid className="rodape-icon" />
                        <SecaoRodapeTitulo>Fit Academy</SecaoRodapeTitulo>
                    </SecaoRodapeCaixaTitulo>

                    <SecaoRodapeCaixaParagrafo>Transformando vidas através do fitness. Junte-se a nós e descubra seu potencial máximo.</SecaoRodapeCaixaParagrafo>

                    <div>
                        <LuFacebook className="rodape-sociais" />
                        <FaInstagram className="rodape-sociais" />
                        <FiTwitter className="rodape-sociais" />
                    </div>
                    <div>

                    </div>
                </SecaoRodapeCaixa>
                <SecaoRodapeCaixa>
                    <h3>Links Rápidos</h3>
                    <ul>
                        <SecaoRodapeCaixaItem>
                            <SecaoRodapeCaixaLink href="">Sobre Nós</SecaoRodapeCaixaLink>
                        </SecaoRodapeCaixaItem>
                        <SecaoRodapeCaixaItem>
                            <SecaoRodapeCaixaLink href="">Planos</SecaoRodapeCaixaLink>
                        </SecaoRodapeCaixaItem>
                        <SecaoRodapeCaixaItem>
                            <SecaoRodapeCaixaLink href="">Modalidades</SecaoRodapeCaixaLink>
                        </SecaoRodapeCaixaItem>
                        <SecaoRodapeCaixaItem>
                            <SecaoRodapeCaixaLink href="">Blog</SecaoRodapeCaixaLink>
                        </SecaoRodapeCaixaItem>
                    </ul>
                </SecaoRodapeCaixa>
                <SecaoRodapeCaixa>
                    <h3>Contato</h3>
                    <SecaoRodapeCaixaContato>Av. Principal, 1234</SecaoRodapeCaixaContato>
                    <SecaoRodapeCaixaContato>Centro - São Paulo, SP</SecaoRodapeCaixaContato>
                    <SecaoRodapeCaixaContato>(11) 99999-9999</SecaoRodapeCaixaContato>
                    <SecaoRodapeCaixaContato>contato@fitacademy.com</SecaoRodapeCaixaContato>
                </SecaoRodapeCaixa>
            </SecaoRodapeContainer>

            <SecaoRodapeDireitos>© 2025 Fit Academy. Todos os direitos reservados.</SecaoRodapeDireitos>
        </SecaoRodape>
    )
}