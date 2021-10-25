import React from 'react'
import styled from 'styled-components'
import { Section } from '../../styles/Section'

export default function Contact() {
    return (
        <Section id="contact">
            <h2 className="section-title">Contact me</h2>
            <ContactStyle>
                <div className="contact-info">
                    <div><i className="fas fa-phone-volume"/> <a href="tel:0355811557">0355-811-557</a></div>
                    <div><i class="fas fa-envelope-open-text"/> <a href="mailto:catan271@gmail.com">catan271@gmail.com</a></div>
                </div>
                <div className="social">
                    <a href="https://github.com/catan271/" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/catan271/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
                    <a href="https://www.facebook.com/catan271/" target="_blank" rel="noreferrer"><i class="fab fa-facebook-f"></i></a>
                </div>
            </ContactStyle>
        </Section>
    )
}

const ContactStyle = styled.div`
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;

    .contact-info a {
        color: #ccc;
        cursor: pointer;
        transition: linear 200ms;
    }

    .contact-info a:hover {
        color: #fff;
    }

    .social {
        height: 100%;
        display: flex;
        align-items: flex-start;
        gap: 12px;
    }
`