import React from 'react'
import styled from 'styled-components'

import { projects } from '../../contants/ProjectsInfo'
import { Section } from '../../styles/Section'
import Project from '../../components/Project'

export default function Projects() {
    return (
        <Section id="projects">
            <h2 className="section-title">
                Projects
            </h2>
            <ProjectsGrid>
                {projects.map((project, index) => <Project project={project}/>)}
            </ProjectsGrid>
        </Section>
    )
}

const ProjectsGrid = styled.div`
    margin-top: 40px;
    display: grid;
    justify-content: space-between;
    row-gap: 32px;
    grid-template-columns: repeat(3, 30%);

    @media (max-width: 768px) {        
        grid-template-columns: repeat(2, 45%);
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 80%);        
        justify-content: center;
    }
`