import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import JobAddService from "../services/jobAdService";
import { Link } from "react-router-dom";


export default function JobAd() {
  const[jobAdds,setJobAdd]=useState([])
  useEffect(()=>{
    let jobAddService=new JobAddService()
    jobAddService.getJobAd().then(result=>setJobAdd(result.data.data))
  },[])
  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell>Başlık</Table.HeaderCell>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Max Maaş</Table.HeaderCell>
            <Table.HeaderCell>Min Maaş</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdds.map((jobAdd)=>
            <Table.Row key={(jobAdd.id)}>
            <Table.Cell><Link to={`/jobad/${jobAdd.employer.id}`}>{jobAdd.jobTitle}</Link></Table.Cell>
            <Table.Cell>{(jobAdd.employer.name).toUpperCase()}</Table.Cell>
            
            <Table.Cell>{jobAdd.jobPosition.name}</Table.Cell>
            <Table.Cell>{jobAdd.sallaryMax}</Table.Cell>
            <Table.Cell>{jobAdd.sallaryMin}</Table.Cell>
            </Table.Row>
          )}
          
          
        </Table.Body>
      </Table>
    </div>
  );
}
