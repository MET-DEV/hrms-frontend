import React, { useEffect, useState } from "react";
import { Table,Button,Icon } from "semantic-ui-react";
import JobAddService from "../services/jobAdService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavori } from "../store/actions/favoriActions";

export default function JobAd() {
  const [jobAdds, setJobAdd] = useState([]);
 const dispatch = useDispatch()

  useEffect(() => {
    let jobAddService = new JobAddService();
    
    
   
    jobAddService.getJobAdTrue().then((result) => setJobAdd(result.data.data));
  }, []);
  const handleAddToFavori=(jobAdd)=>{
    dispatch(addToFavori(jobAdd))
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
              <Button onClick={()=>handleAddToFavori(jobAdd)} color="teal" icon labelPosition='left'>
                <Icon name='favorite' />
                Favorilerime Ekle
              </Button>
              
              
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
