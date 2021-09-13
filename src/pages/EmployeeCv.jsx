import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card,Label,Rating,Button } from 'semantic-ui-react'
import EmployeeCvService from '../services/employeeCvService';

export default function EmployeeCv() {
    let{id}=useParams()
    const[employeeCv,setEmployeeCv]=useState({});
    useEffect(()=>{
        let employeeCvService=new EmployeeCvService()
        employeeCvService.getByEmployeeId(id).then((result)=>setEmployeeCv(result.data.data))
    })
    return (
        <div>
            <Card centered fluid>
                <Card.Content><Card.Header>CV</Card.Header></Card.Content>
                <Card.Content><Card.Header>Ad Soyad</Card.Header> 
                    <Card.Header><Label color="orange" size="huge" style={{ marginTop: "15px" }}>{employeeCv.employee&&employeeCv.employee.firstName} {employeeCv.employee&&employeeCv.employee.lastName}</Label></Card.Header>
                </Card.Content>
                
                {employeeCv.employee&&employeeCv.employee.headers.map((header)=>(
                    <Card.Content><Card.Header>Önyazı</Card.Header> 
                    <Card.Description>{header.header} </Card.Description>
                    </Card.Content>
                ))}
               
                
                
                <Card.Content><Card.Header>Bilinen Diller</Card.Header> 
                {employeeCv.employee&&employeeCv.employee.languages.map((language)=>(
                    <div>
                    <Label style={{ marginTop: "15px" }} size="large" color="yellow">{language.language}</Label><Rating maxRating={5} defaultRating={language.languageLevel} disabled  icon='star' size='large' /> 
        
                    </div>
                   
                    
                ))}
                </Card.Content>
                
                
                
                <Card.Content><Card.Header>Okullar</Card.Header> 
                {employeeCv.employee&&employeeCv.employee.educations.map((education)=>(
                    <div>
                        <Label style={{ marginTop: "15px" }} size="large" color="purple">{education.schoolName}&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; {education.startYear}/{education.completionYear} </Label>        
                    </div>
                   
                    
                ))}
                
    

                </Card.Content>
                <Card.Content><Card.Header>Bilinen Teknolojiler</Card.Header> 
                {employeeCv.employee&&employeeCv.employee.technologies.map((tech)=>(
                    <div>
                        <Label style={{ marginTop: "15px" }} size="large" color="purple">{tech.technologyName}</Label>        
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
