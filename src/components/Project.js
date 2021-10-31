import React from 'react'
import styled from 'styled-components'

export default function Project({ project }) {
    const { img, title, tags, link } = project;

    return (
        <ProjectStyle className="project">
            <div className="title">{title}</div>
            <img src={img} alt=""/>
            <div className="tags">
                {tags.map((tag, index) => <div key={index} className="tag">{tag}</div>)}
            </div>
            <a href={link} target="_blank" rel="noreferrer">Visit</a>
        </ProjectStyle>
    )
}

const ProjectStyle = styled.div`
    background-color: #222e46;
    padding: 8px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .title {
        color: #9cc9e3;
        font-size: 20px;
    }

    img {
        width: 100%;
    }

    .tags {
        display: flex;
        gap: 8px;
        
        .tag {
            padding: 4px;
            background-color: #3388ff;
            border-radius: 4px;
        }
    }

    a {
        display: block;
        background: linear-gradient(120deg, #ff00e6f7, #3388ff);
        padding: 4px 16px;
        border-radius: 4px;
        cursor: pointer;
        transition: linear 200ms;
    }

    a:hover {
        filter: brightness(1.2);
    }
`