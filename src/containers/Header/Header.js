import React from 'react'
import styled from 'styled-components'

export default function Header() {
    return (
        <HeaderStyle>
            <div>
                <i className="fab fa-500px"></i>
                Portfolio
            </div>
            <div className="navigation">
                <div className="nav-link">
                    <a href="#home">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="social">
                    <a href="https://github.com/catan271/" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/catan271/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://www.facebook.com/catan271/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                </div>
            </div>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
    width: 1160px;
    max-width: calc(100% - 24px);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    padding: 12px 0;
    position: fixed;
    z-index: 1;
    background-color: #0F1624;

    .navigation {
        display: flex;
        gap: 80px;

        .social,
        .nav-link {
            display: flex;
            gap: 24px;
        }

        .nav-link a {
            color: #ccc;
            transition: linear 200ms;
        }
        .nav-link a:hover {
            color: white;
        }

        .social i:hover {
            cursor: pointer;
        }
    }

    @media (max-width: 768px) {
        position: relative;
        
        .navigation {
            flex-direction: column-reverse;
            gap: 0;
            align-items: flex-end;
        }
    }

    @media (max-width: 480px) {
        .navigation {
            flex: 1;
            align-items: center;
            font-size: 20px;
        }
    }
`