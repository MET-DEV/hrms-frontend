import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobAdService from "../services/jobAdService";
import { Header, Icon,Label, Table,Container, Card, Image } from "semantic-ui-react";

export default function JobAdDetail() {
  let { id } = useParams();
  const [jobAd, setJobAd] = useState({});
  useEffect(() => {
    let jobAddService = new JobAdService();
    jobAddService.getJobAdDetail(id).then((result) => setJobAd(result.data.data));
  });
  return (
    <div>
    
    <Card centered fluid>
    <Image
      src='https://images.squarespace-cdn.com/content/v1/5ce54ceeb2d3200001767ce6/1561076272718-AXCEZH5JEWYHFLO9PZTX/IconLogo-01.png?format=1000w'
      size="small"
      centered
      
      
      
    />
    <Card
    fluid
    centered
    header='İlan Bilgileri'
    style={{ marginBottom: "30px" }}
    
    
  >
    <Card.Header style={{ marginBottom: "8px" }}><Label style={{ marginTop: "15px" }} color="blue" size="large">İlan Bilgileri</Label></Card.Header>
    
    
    <Container text>
    <Card.Header style={{ marginBottom: "1px" }}><strong> {jobAd.jobTitle}</strong></Card.Header>
      <hr/>
    <Card.Description style={{ marginLeft: "55px" }} style={{ marginRight: "55px" }} >{jobAd.employer && (jobAd.employer.name)} şirketi tarafından eklenmiş bu pozisyon için tanımlanan minimum ücret {jobAd.sallaryMin}TL, tanımlanan maksimum ücret ise {jobAd.sallaryMax}TL' dir. Çalışmak için ise {jobAd.city && jobAd.city.cityName} şehrinde olmanız beklenmektedir.</Card.Description>
    </Container>

  </Card >
    <Container style={{ marginBottom: "100px" }} textAlign="left" text>
    <Header as='h2'>Açıklama</Header>
    <hr/>
    <p>
      {jobAd.description}
    </p>
    
  </Container>
  </Card>
    
    </div>
  );
}