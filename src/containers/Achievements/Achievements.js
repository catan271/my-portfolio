import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { Section } from '../../styles/Section'
import Achievement from '../../components/Achievement'
import Service from '../../api/Api'

const gap = 24, itemWidth = 160;

export default function Achievements() {
    const achievementNode = useRef()
    const [active, setActive] = useState(0)
    const [achievements, setAchievements] = useState([])

    useEffect(() => {
        Service.getAchievements()
            .then((res) => setAchievements(res.data))
            .catch(console.log)
    }, [])

    const handleScroll = (e) => {
        const scrollLeft = e.target.scrollLeft
        const index = Math.floor((scrollLeft + itemWidth / 2) / (gap + itemWidth))
        if (index !== active) setActive(index)
    }

    const handleClick = (index) => {
        const left = index * (itemWidth + gap)
        achievementNode.current.scrollTo({left, behavior: 'smooth'})
    }

    return (
        <Section id="achievements">
            <h2 className="section-title">
                Personal Achievements
            </h2>
            <AchievementStyle onScroll={handleScroll} ref={achievementNode} theme={{gap, itemWidth}}>
                {achievements.map((each, index) => <Achievement key={index} achievement={each}/>)}
            </AchievementStyle>
            <ScrollIndex>
                {achievements.map((each, index) => <button onClick={() => handleClick(index)} key={index}><div className={"item" + (active === index? " active" : "")}></div></button>)}
            </ScrollIndex>
        </Section>
    )
}

const AchievementStyle = styled.div`
    display: flex;
    gap: ${props => props.theme.gap + 'px'};
    overflow-x: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }

    .achievement {
        width: ${props => props.theme.itemWidth + 'px'};
        min-width: ${props => props.theme.itemWidth + 'px'};
    }

    &::after {
        content: "";
        display: block;
        min-width: ${props => 'calc(100% - ' + (props.theme.gap + props.theme.itemWidth) + 'px)'};
    }
`

const ScrollIndex = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 24px;

    button {
        height: 24px;
        width: 24px;
        background: none;
        cursor: pointer;
    }

    .item {
        margin: auto;
        height: 4px;
        width: 4px;
        border-radius: 50%;
        border-width: 8px;
        background-color: #ccc;
    }
    .item.active {
        height: 8px;
        width: 8px;
        background-color: #fff;
    }
`