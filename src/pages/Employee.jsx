import React, { useEffect, useState } from "react";
import { Button, Card, Label } from 'semantic-ui-react'
import EmployeeService from "../services/employeeService";
import EmployeeCvService from "../services/employeeCvService";
import JobPositionService from "../services/jobPositionService";
import { Link } from "react-router-dom";


export default function Employee() {
  const [employees, setEmployees] = useState([]);
  const [employeeCv,setEmoloyeeCv]=useState([])
  
  useEffect(() => {
    
    let employeeCvService=new EmployeeCvService();
    let employeeService = new EmployeeService();
    
    employeeCvService.getCv().then((result)=>setEmoloyeeCv(result.data.data))
    employeeService
      .getEmployees()
      .then((result) => setEmployees(result.data.data));
  },[]);

 
  return (
    <div>
        <Card.Group>
    <Card fluid color="brown">
      
        {employeeCv.map((employee)=>(
          <Card.Content>
          <div>
          <Card.Header><Label style={{ marginTop: "10px" }}  size="huge" color="orange">{employee.employee.firstName} {employee.employee.lastName}</Label></Card.Header>
          <Card.Header style={{ marginTop: "2px" }}><Label color="red" size="large">{employee.employee.email}</Label></Card.Header>
          
          {employee.employee.headers.map((header)=>(
            <div>
              <Label color="brown" style={{ marginTop: "15px" }}>Açıklama</Label>
              <Card.Description style={{ marginTop: "5px" }}>{header.header}</Card.Description>
            </div>
            
          ))}
            <Card.Content extra>
          <Link to={`/cv/${employee.employee.id}`}><Button  size="large" color="green">CV Görüntüle</Button></Link>
            
          </Card.Content>
          </div>
          </Card.Content>
        ))}
        
        
        
      
      
    </Card>
    
  </Card.Group>
        
      
    </div>
  );
}
