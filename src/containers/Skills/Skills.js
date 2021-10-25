import React from 'react'
import styled from 'styled-components'
import Skill from '../../components/Skill'

import { skills } from '../../contants/SkillsInfo'
import { Section } from '../../styles/Section'

export default function Skills() {
    return (
        <Section id="skills" style={{minHeight: '80vh'}}>
            <h2 className="section-title">Skills</h2>
            <SkillGrid>
                {skills.map((skill, index) => <Skill key={index} skill={skill}/>)}
            </SkillGrid>
        </Section>
    )
}

const SkillGrid = styled.div`
    margin-top: 40px;
    display: grid;
    row-gap: 12px;
    grid-template-columns: repeat(3, 32%);
    justify-content: space-between;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 48%);
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 80%);
        justify-content: center;
    }
`