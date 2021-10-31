import React from 'react'
import styled from 'styled-components'
import Skill from '../../components/Skill'

import { skills } from '../../constants/SkillsData'
import { Section } from '../../styles/Section'

export default function Skills() {
    return (
        <SkillsSection id="skills">
            <h2 className="section-title">Skills</h2>
            <SkillGrid>
                {skills.map((skill, index) => <Skill key={index} skill={skill}/>)}
            </SkillGrid>
        </SkillsSection>
    )
}

const SkillsSection = styled(Section)`
    min-height: 440px;

    @media (max-width: 768px) {
        min-height: 480px;
    }

    @media (max-width: 480px) {
        min-height: 560px;
    }
`

const SkillGrid = styled.div`
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