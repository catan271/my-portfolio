import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Section } from '../../styles/Section'
import Project from '../../components/Project'
import Service from '../../api/Api'

export default function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        Service.getProjects()
            .then((res) => {
                setProjects(res.data)
            })
            .catch(console.log)
    }, [])

    return (
        <Section id="projects">
            <h2 className="section-title">
                Projects
            </h2>
            <ProjectsGrid>
                {projects.map((project, index) => <Project key={index} project={project}/>)}
            </ProjectsGrid>
        </Section>
    )
}

const ProjectsGrid = styled.div`
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