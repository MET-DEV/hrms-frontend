import React from 'react'
import { Container } from 'semantic-ui-react';
import * as Yup from "yup";
import HeaderAdd from './HeaderAdd';
import EducationAdd from './EducationAdd';
import LanguageAdd from './LanguageAdd';
import TechnologyAdd from './TechnologyAdd';
import ExperienceAdd from './ExperienceAdd';

export default function CvAdd() {
    
    return (
        <div>
            
                <Container ><HeaderAdd/></Container>
                <Container style={{ marginTop: "20px" }}><EducationAdd/></Container>
                <Container style={{ marginTop: "20px" }}><ExperienceAdd/></Container>
                <Container style={{ marginTop: "20px" }}><LanguageAdd/></Container>
                <Container style={{ marginTop: "20px" }}><TechnologyAdd/></Container>
                
            

        </div>
    )
}
