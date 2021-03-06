import React, { useEffect, useState } from "react";
import { Button, Table } from "semantic-ui-react";
import JobAddService from "../services/jobAdService";
import { Link } from "react-router-dom";





export default function JobAd() {
    const [jobAdds, setJobAdd] = useState([]);
    
  
    useEffect(() => {
      let jobAddService = new JobAddService();
      
      
      
     
      jobAddService.getJobAdFalse().then((result) => setJobAdd(result.data.data));
    }, []);
    function deleteToJobAd(value) {
        let jobAddService=new JobAddService()
        jobAddService.delete(value)
        window.location.reload()      
    }
    function updateToJobAd(value) {
      let jobAdService=new JobAddService()
      jobAdService.update(value)
      window.location.reload()
    }

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
            {jobAdds.map((jobAdd) => (
              <Table.Row key={jobAdd.id}>
                <Table.Cell>
                  <Link to={`/jobad/${jobAdd.employer&&jobAdd.id}`}>{jobAdd.jobTitle}</Link>
                </Table.Cell>
                <Table.Cell>{jobAdd.employer&&(jobAdd.employer.name).toUpperCase()}</Table.Cell>
  
                <Table.Cell>{jobAdd.jobPosition && (jobAdd.jobPosition.name).toUpperCase()}</Table.Cell>
                <Table.Cell>{jobAdd.sallaryMax}</Table.Cell>
                <Table.Cell>{jobAdd.sallaryMin}</Table.Cell>
                <Table.Cell><Button onClick={()=>updateToJobAd(jobAdd)} color="blue">Aktifleştir</Button></Table.Cell>
                <Table.Cell><Button onClick={()=>deleteToJobAd(jobAdd)} color="red">Sil</Button></Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
  