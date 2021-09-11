import React, { useEffect, useState } from "react";
import { Button, Card, CardDescription, Image } from 'semantic-ui-react'
import EmployeeService from "../services/employeeService";
import EmployeeCvService from "../services/employeeCvService";
import JobPositionService from "../services/jobPositionService";
import { Link } from "react-router-dom";



export default function Employee() {
 
  const [employeeCv,setEmoloyeeCv]=useState([])
  
  useEffect(() => {
    
    let employeeCvService=new EmployeeCvService();
    
    
    
    employeeCvService.getCv().then((result)=>setEmoloyeeCv(result.data.data))
    console.log(employeeCv)
    
  },[]);

 
  return (
   
        <div>
           {employeeCv.map((employee)=>(
             
             <Card>
               <Card.Content>
                 <Image
                   bordered
                   size='tiny'
                   src='https://avatars.githubusercontent.com/u/72195347?v=4'
                 />
                 
                 <Card.Header style={{ marginTop: "10px" }}> {employee.employee.firstName} {employee.employee.lastName}</Card.Header>
                 <Card.Meta>{employee.employee.email}</Card.Meta>
                 <hr />
                 
                 {employee.employee&&employee.employee.headers.map((header)=>(
                    
                    <Card.Description>
                     {header.header}
                    </Card.Description>
                    
                ))}
                 
               </Card.Content>
               <Card.Content extra>
                 
                 <Link to={`/cv/${employee.employee.id}`}><Button color='green'>
                     CV
                   </Button></Link>
                   
                 
               </Card.Content>
             </Card>
             
          
    
         
          ))}

        </div>
      
       
        
        
        
      

        
      
    
  );
}
