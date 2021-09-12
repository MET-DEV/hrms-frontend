import React, { useEffect, useState } from 'react'
import EmployeeCvService from '../services/employeeCvService';
import { Button, Card,Label,Rating,Input,Form } from 'semantic-ui-react'
import EducationService from '../services/educationService';
import Language from '../services/languageService';
import TechnologyService from '../services/technologyService';
import * as Yup from "yup";
import { useFormik } from 'formik';
import EmployeeService from '../services/employeeService';

export default function LoginEmployeeCv() {
    const[employeeCv,setEmployeeCv]=useState({});
    const[employeee,setEmployee]=useState({});
    useEffect(()=>{
        let employeeId=1
        let employeeCvService=new EmployeeCvService()
        employeeCvService.getByEmployeeId(employeeId).then((result)=>setEmployeeCv(result.data.data))
        let employeeService=new EmployeeService()
        employeeService.getById(employeeId).then((result)=>setEmployee(result.data.data))
    },[])
    const mailSchema=Yup.object().shape({
        mail:Yup.string().email().required()
    })
    const formik=useFormik({
        initialValues:{
            mail:""
        },
        validationSchema:mailSchema,
        onSubmit:(values)=>{
            let employee=employeee
            employee.email=values.mail
            let employeeService=new EmployeeService()
            
            employeeService.add(employee)
           
        }
    })
    
    function deleteEducation(edu) {
        let eduService=new EducationService()
        eduService.delete(edu)
        window.location.reload()
    }
    function deleteLanguage(lang) {
        let langService=new Language()
        langService.delete(lang)
        window.location.reload()
    }
    function deleteTech(tech) {
        let techService=new TechnologyService()
        techService.delete(tech)
        window.location.reload()
    }
    
    return (
        <div>
            
            <Card fluid>
                <Card.Content><Card.Header>CV</Card.Header></Card.Content>
                
                <Card.Content><Card.Header>Ad Soyad</Card.Header> 
                    <Card.Header><Label color="orange" size="huge" style={{ marginTop: "15px" }}>{employeeCv.employee&&employeeCv.employee.firstName} {employeeCv.employee&&employeeCv.employee.lastName}</Label></Card.Header>
                </Card.Content>
            
                <Card.Content><Card.Header>Email</Card.Header> 
                    <Card.Description>{employeeCv.employee&&employeeCv.employee.email}</Card.Description> 
                <Form onSubmit={formik.handleSubmit}>
                <Input
                
                value={formik.values.mail}
                onChange={formik.handleChange}
                name="mail"

                />
                <Button
               
               content="Değiştir"
               labelPosition="right"
               icon="add"
               positive
               type="submit"
               style={{ marginLeft: "20px" }}
             />
                </Form>
                
                </Card.Content>
                {employeeCv.employee&&employeeCv.employee.headers.map((header)=>(
                    <Card.Content><Card.Header>Önyazı</Card.Header> 
                    <Card.Description>{header.header}</Card.Description>
                    </Card.Content>
                ))}
                <Card.Content><Card.Header>Bilinen Diller</Card.Header> 
                {employeeCv.employee&&employeeCv.employee.languages.map((language)=>(
                    <div>
                    <Label style={{ marginTop: "15px" }} size="large" color="yellow">{language.language}</Label><Rating maxRating={5} defaultRating={language.languageLevel} disabled  icon='star' size='large' /><Button onClick={()=>deleteLanguage(language)} color="red" content="Sil"  />
        
                    </div>
                   
                    
                ))}
                </Card.Content>
                
                
                
                <Card.Content><Card.Header>Okullar</Card.Header> 
                {employeeCv.employee&&employeeCv.employee.educations.map((education)=>(
                    <div>
                        <Label style={{ marginTop: "15px" }} size="large" color="purple">{education.schoolName}&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; {education.startYear}/{education.completionYear} </Label>        <Button onClick={()=>deleteEducation(education)} color="red" content="Sil"  />
                    </div>
                   
                    
                ))}
                
    

                </Card.Content>
                <Card.Content><Card.Header>Bilinen Teknolojiler</Card.Header> 
                {employeeCv.employee&&employeeCv.employee.technologies.map((tech)=>(
                    <div>
                        <Label style={{ marginTop: "15px" }} size="large" color="purple">{tech.technologyName} </Label>        <Button onClick={()=>deleteTech(tech)} color="red" content="Sil"  />
                    </div>
                   
                    
                ))}
                
                </Card.Content>
                <Card.Content><Card.Header>Bağlantılar</Card.Header> 
                <br/>
            
                
                {employeeCv.employee&&employeeCv.employee.contacts.map((contact)=>(
                    <div>
                      <a href={contact.githubAddress}><Button
               
               content="Github Adresi"
               labelPosition="right"
               icon="github"
               color="black"
               
               type="submit"
               style={{ marginLeft: "20px" }}
             ></Button></a>    
             <a href={contact.linkedinAddress}><Button
               
               content="Linkedin Adresi"
               labelPosition="right"
               icon="linkedin"
               color="blue"
               
               type="submit"
               style={{ marginLeft: "20px" }}
             ></Button></a>        
                    </div>
                    
                   
                    
                ))}
                
    

                </Card.Content>

            </Card>
        </div>
    )
}
