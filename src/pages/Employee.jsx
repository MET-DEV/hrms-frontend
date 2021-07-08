import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import EmployeeService from "../services/employeeService";
import EmployeeCvService from "../services/employeeCvService";
import JobPositionService from "../services/jobPositionService";

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
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ad Soyad</Table.HeaderCell>
            <Table.HeaderCell>Bilinen Diller</Table.HeaderCell>
            <Table.HeaderCell>Mail Adresi</Table.HeaderCell>
            <Table.HeaderCell>Doğum Yılı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
            {employeeCv.map((employee)=>(
                <Table.Row>
                <Table.Cell><strong>{employee.employee.firstName} {employee.employee.lastName}</strong></Table.Cell>
                {employeeCv.map((employeeCv)=>(
                    <Table.Cell>{employeeCv.employee.languages.map((language)=>(
                      <strong> <p>Dil: {language.language}&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Seviye: {language.languageLevel}</p></strong>
                       ))}</Table.Cell>
                ))}
                
                
                
                <Table.Cell><strong>{employee.employee.email}</strong></Table.Cell>
                <Table.Cell><strong>{employee.employee.yearOfBirth}</strong></Table.Cell>
              </Table.Row>
            ))}
          
        </Table.Body>
      </Table>
    </div>
  );
}
