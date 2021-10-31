import React from 'react'

import Header from './Header/Header'
import Home from './Home/Home'
import { SectionSeparator } from '../styles/Section'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import Achievements from './Achievements/Achievements'

export default function Portfolio() {
    return (
        <React.Fragment>
            <Header/>
            <div style={{width: 1000, maxWidth: 'calc(100% - 24px)'}}>
                <Home/>
                <SectionSeparator/>
                <Projects/>
                <SectionSeparator/>
                <Skills/>
                <SectionSeparator/>
                <Achievements/>
                <SectionSeparator/>
                <Contact/>
            </div>
        </React.Fragment>
    )
}