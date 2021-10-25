import React, { useState } from 'react'
import styled from 'styled-components'

export default function Skill({ skill }) {
    const { icon, title, languages } = skill
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(open => !open)
    }

    return (
        <SkillStyle className="skill" theme={{open}}>
            <div className="title" onClick={handleClick}>
                <i style={{marginRight: 4}} className={icon}></i>
                {title}
                <i style={{marginLeft: 'auto'}} className={"fas fa-angle-" + (open ? 'up' : 'down')}> </i>
            </div>
            {open && <div className="languages">
                {languages.map((lang, index) => <LangRating key={index} theme={{rating: lang[1]}}>
                    <div className="name">
                        <div>{lang[0]}</div>
                        <div>{lang[1]}%</div>
                    </div>
                    <div className="rating"></div>
                </LangRating>)}
            </div>}
        </SkillStyle>
    )
}

const SkillStyle = styled.div`
    border-radius: 8px;
    overflow: hidden;
    ${props => props.theme.open && 'box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);'}
    

    .title {
        cursor: pointer;
        padding: 12px;
        background-color: #222e46;
        display: flex;
        align-items: center;
    }

    .languages {
        padding: 12px;
    }
`

const LangRating = styled.div`
    .name {
        display: flex;
        justify-content: space-between;
    }

    .rating {
        height: 4px;
        width: 100%;
        background-image: linear-gradient(120deg, #ff00e6f7, #3388ff);
        background-size: ${props => props.theme.rating + '% 100%'};
        background-repeat: no-repeat;
    }
`