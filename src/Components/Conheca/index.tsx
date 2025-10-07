import styled from "styled-components";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import imgSwiper1 from "./assets/pesos-redondos.jpg"
import imgSwiper2 from "./assets/alteres-organizados.jpg"
import imgSwiper3 from "./assets/conversando-academia.jpg"
import imgSwiper4 from "./assets/esteiras.jpg"
import imgSwiper5 from "./assets/erguendo-peso.jpg"
import imgSwiper6 from "./assets/personal.jpg"

const SecaoConheca = styled.section`
    padding: 4rem;
    text-align: center;
`
const SecaoConhecaoTitulo = styled.h1`
    font-size: 3.8rem;
    font-weight: 800;
`
const SecaoConhecaoParagrafo = styled.p`
    font-size: 1.3rem;
    width: 70%;
    margin: 0 auto;
    color: #70706bff;
    padding: .5rem 0 3.5rem;
`

const SecaoConhecaCaixaImagem = styled.div`
    width: 400px;
    height: 300px;
    display: flex;
`
const ImagemSwiper = styled.img`
    width: 100%;
    border-radius: 20px;
`

function Conheca() {
    return (
        <SecaoConheca>
            <SecaoConhecaoTitulo>Conheça Nossa Estrutura</SecaoConhecaoTitulo>
            <SecaoConhecaoParagrafo>Equipamentos de ponta e ambiente perfeito para você alcançar seus objetivos Equipamentos premium de musculação - halteres e pesos
                Equipamentos de Última Geração Pessoas treinando em grupo na academia Ambiente Motivador
            </SecaoConhecaoParagrafo>
            <Swiper
                // install Swiper modules
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <SecaoConhecaCaixaImagem>
                        <ImagemSwiper src={imgSwiper1} alt="" />
                    </SecaoConhecaCaixaImagem>
                </SwiperSlide>
                <SwiperSlide>
                    <SecaoConhecaCaixaImagem>
                        <ImagemSwiper src={imgSwiper2} alt="" />
                    </SecaoConhecaCaixaImagem>
                </SwiperSlide>
                <SwiperSlide>
                    <SecaoConhecaCaixaImagem>
                        <ImagemSwiper src={imgSwiper3} alt="" />
                    </SecaoConhecaCaixaImagem>
                </SwiperSlide>
                <SwiperSlide>
                    <SecaoConhecaCaixaImagem>
                        <ImagemSwiper src={imgSwiper4} alt="" />
                    </SecaoConhecaCaixaImagem>
                </SwiperSlide>
                <SwiperSlide>
                    <SecaoConhecaCaixaImagem>
                        <ImagemSwiper src={imgSwiper5} alt="" />
                    </SecaoConhecaCaixaImagem>
                </SwiperSlide>
                <SwiperSlide>
                    <SecaoConhecaCaixaImagem>
                        <ImagemSwiper src={imgSwiper6} alt="" />
                    </SecaoConhecaCaixaImagem>
                </SwiperSlide>

            </Swiper>
        </SecaoConheca>
    )
}

export default Conheca