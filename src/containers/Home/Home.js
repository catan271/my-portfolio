import React from 'react'
import styled from 'styled-components'

import { Section } from '../../styles/Section'
import BackgroundAnimation from '../../components/BgAnimation'

export default function Home() {
    return (
        <Section id="home">
            <h1 className="section-title">
                Welcome to <br/>my personal portfolio
            </h1>
            <HomeContent>Hi, I am Catan. I am a fullstack-developer. I have been studying and working in web development. Scroll down to learn more about me.</HomeContent>
            <Button href="#projects">Learn more</Button>
            <BgAnimation><BackgroundAnimation/></BgAnimation>
        </Section>
    )
}

const HomeContent = styled.div`
    margin-top: 40px;
    width: 600px;
    max-width: 100%;
    color: #ccc;
    font-size: 24px;
    text-align: justify;

    @media (max-width: 768px) {
        font-size: 20px;
        width: 480px;
    }
`

const Button = styled.a`
    display: block;
    cursor: pointer;
    height: 60px;
    width: 160px;
    border-radius: 30px;
    line-height: 60px;
    text-align: center;
    font-size: 18px;
    background: linear-gradient(120deg, #ff00e6f7, #3388ff);
    transition: linear 200ms;

    &:hover {
        filter: brightness(1.2);
    }
`

const BgAnimation = styled.div`
    width: 400px;
    max-width: 100%;
    position: absolute;
    top: 60px;
    right: 0;
    z-index: -1;
`