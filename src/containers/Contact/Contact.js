import React, { useState } from 'react'
import styled from 'styled-components'

import { Section } from '../../styles/Section'
import Service from '../../api/Api'

export default function Contact() {
    const [sendStatus, setSendStatus] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name
        const email = e.target.email
        const content = e.target.content

        setSendStatus(undefined)

        Service.sendMessage({name: name.value, email: email.value, content: content.value})
            .then(() => setSendStatus(<i className="fas fa-check-circle" style={{color: '#23fb23'}}></i>))
            .catch(() => setSendStatus(<i className="fas fa-times-circle" style={{color: '#dc2525'}}></i>))
            .finally(() => {
                name.value = ''
                email.value = ''
                content.value = ''
            })
    }

    return (
        <Section id="contact">
            <h2 className="section-title">Contact me</h2>
            <ContactStyle>
                <div className="contact-info">
                    <div><i className="fas fa-phone-volume"/> <a href="tel:0355811557">0355-811-557</a></div>
                    <div><i className="fas fa-envelope-open-text"/> <a href="mailto:catan271@gmail.com">canh.tranduc2002@gmail.com</a></div>
                </div>
                <form className="message" onSubmit={handleSubmit}>
                    <div className="info">
                        <input name="name" placeholder="Name" required/>
                        <input name="email" placeholder="Email" required/>
                    </div>
                    <textarea className="content" name="content" placeholder="Leave a message" required/>
                    <button>Send {sendStatus}</button>
                </form>
            </ContactStyle>
        </Section>
    )
}

const ContactStyle = styled.div`
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

    .message {
        display: flex;
        flex-direction: column;
        gap: 8px;
        color: #000;

        .info {
            display: flex;
            gap: 4px;

            input {
                height: 36px;
                border-radius: 4px;
                padding: 8px;
            font-size: 14px;
            }

            input:focus {
                outline: 2px solid #3388ff;
            }
        }

        .content {
            height: 60px;
            resize: none;
            border-radius: 4px;
            padding: 8px;
            font-size: 14px;
        }
        .content:focus {
            outline: 2px solid #3388ff;
        }

        button {
            font-size: 14px;
            width: fit-content;
            padding: 8px;
            background: linear-gradient(120deg, #ff00e6f7, #3388ff);
            color: #fff;
            border-radius: 4px;
            align-self: flex-end;
        }
    }

    @media (max-width: 840px) {
        flex-direction: column;
        gap: 24px;
    }
`