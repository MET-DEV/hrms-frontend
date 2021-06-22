import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobAdService from "../services/jobAdService";
import { Header, Icon, Table } from "semantic-ui-react";

export default function JobAdDetail() {
  let { id } = useParams();
  const [jobAd, setJobAd] = useState({});
  useEffect(() => {
    let jobAddService = new JobAdService();
    jobAddService.getJobAdDetail(id).then((result) => setJobAd(result.data.data));
  });
  return (
    <div>
       
      <Header as="h2" icon textAlign="center">
        <Icon name="users" circular />
        <Header.Content>{jobAd.employer && (jobAd.employer.name).toUpperCase()}</Header.Content>
        
      </Header>
      <Header as='h3'>{jobAd.jobTitle}</Header>

      <Table fixed>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Mail Adersi</Table.HeaderCell>
        <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
        
        <Table.HeaderCell>Açıklama</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell><strong>{jobAd.employer &&jobAd.employer.email}</strong></Table.Cell>
        <Table.Cell><strong>{jobAd.employer && jobAd.employer.phoneNumber}</strong></Table.Cell>
        <Table.Cell><strong>{jobAd.jobPosition && (jobAd.jobPosition.name).toUpperCase()}</strong></Table.Cell>
        
        <Table.Cell>
        <strong>{jobAd.description}</strong><br/><br/>
          <strong>Şehir: {jobAd.city && jobAd.city.cityName}</strong> <br/><br/>
          <strong>Max Maaş: {jobAd.sallaryMax}<br/><br/> Min Maaş: {jobAd.sallaryMin}</strong>
        </Table.Cell>
      </Table.Row>
      
    </Table.Body>
  </Table>
    </div>
  );
}