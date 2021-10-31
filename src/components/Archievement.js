import React from 'react'
import styled from 'styled-components';

export default function Achievement({ achievement }) {
    const {logo, organization, title} = achievement;

    return (
        <AchievementStyle className="achievement">
            <img className="logo" src={logo} alt=""/>
            <div className="decoration">
                <div className="strike"></div>
                <div className="dot"></div>
            </div>
            <h3 className="organization">{organization}</h3>
            <p className="title">{title}</p>
        </AchievementStyle>
    )
}

const AchievementStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;

    .logo {
        width: 30%
    }

    .decoration {
        display: flex;
        width: 100%;
        align-items: center;

        .strike {
            flex: 2;
            height: 2px;
            background: linear-gradient(90deg, #fff0, #fff);
        }

        .dot {
            height: 8px;
            width: 8px;
            border-radius: 50%;
            border: 2px solid #fff;
        }
    }

    .title {
        padding-left: 20px;
        text-align: right;
    }
`