import React, { useEffect, useState } from "react";
import JobAddService from "../services/jobAdService";
import * as Yup from "yup";
import {  Formik,Form } from "formik";
import {
  Button,
  Icon,
  Card,
 
  Grid,
  CardContent,
  Label,
} from "semantic-ui-react";
import CityService from "../services/cityService";
import JobPositionService from "../services/jobPositionService";
import WorkTypeService from "../services/workTypeService";
import { toast } from "react-toastify";
import HRMSTextInput from "../utilities/customFormControls/HRMSTextInput";
import HRMSSelect from "../utilities/customFormControls/HRMSSelect";
import HRMSTextArea from "../utilities/customFormControls/HRMSTextArea";


export default function JobAdadd() {
  
  let jobAdService = new JobAddService();
  const schema = Yup.object().shape({
    jobTitle: Yup.string().required("Başlık zorunludur"),
    positionNeed: Yup.number().required(
      "Lütfen ihtiyacınız olan kişi sayısını boş bırakmayınız"
    ),
    workTypeId: Yup.number()
      .min(0, "0 dan az olamaz")
      .required("Alan boş bırakılamaz"),
    jobPositionId: Yup.number()
      .min(0, "0 dan az olamaz")
      .required("Alan boş bırakılamaz"),
    
    description: Yup.string().required("Açıklama yazmalısınız"),
    cityId: Yup.number()
      .min(0, "0 dan az olamaz")
      .required("Alan boş bırakılamaz"),
    sallaryMin: Yup.number()
      .min(0, "0 dan az olamaz")
      .required("Alan boş bırakılamaz"),
    sallaryMax: Yup.number()
      .min(0, "0 Dan az olamaz")
      .required("Alan boş bırakılamaz"),
  });
  const initialValues={
    jobTitle: "",
    jobPositionId: "",
    workTypeId: "",
    positionNeed: "",

    description: "",
    cityId: "",
    sallaryMax: "",
    sallaryMin: "",
  }

  const handleJobAd=(values)=>{
    return{
      jobTitle:values.jobTitle,
      positionNeed:values.positionNeed,
      sallaryMax:values.sallaryMax,
      sallaryMin:values.sallaryMin,
      description:values.description,
      city:{
        id:values.cityId
      },
      employer:{
        id:1
      },
      jobPosition:{
        id:values.jobPositionId
      },
      workType:{
        id:values.workTypeId
      }

    }
  }
 
  const [workTypes, setWorkTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    let jobPositionService = new JobPositionService();
    let workTypeService = new WorkTypeService();
    
    

    cityService.getCity().then((result) => setCities(result.data.data));
    jobPositionService
      .getJobPosition()
      .then((result) => setJobPositions(result.data.data));
    workTypeService.getAll().then((result) => setWorkTypes(result.data.data));
  },[]);
  

  const workTypeOption = workTypes.map((worktype, index) => ({
    key: index,
    text: worktype.workTypeName,
    value: worktype.id,
  }));

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));
  const jobPositionOption = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.name,
    value: jobPosition.id,
  }));

  
  return (
    <div>
      <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values)=>{
        
        jobAdService.add(handleJobAd(values)).then((result)=>console.log(result.message))
        toast.success("İlan pasif bir şekilde sistemimize eklendi. Personelimiz İnceleyecektir")
        setTimeout(() => { window.location.reload() }, 4300);
      }}>
        <Form className="ui form">
          <Card centered fluid>
            <Grid>
              
            <Grid.Column  width={15}>
           <Card.Content><Label size="large" color="green">Başlık</Label><HRMSTextInput style={{ marginLeft: "30px" }} name="jobTitle" placeholder="İlan Başlığı"/></Card.Content>
           </Grid.Column>
           <Grid.Column width={15}>
           <Card.Content><Label size="large" color="green">Açıklama</Label><HRMSTextArea style={{ marginLeft: "30px" }} name="description" placeholder="Açıklama"/></Card.Content>
           </Grid.Column>
           <Grid.Column width={15}>   
            <Card.Content><Label size="large" color="green">Pozisyon</Label><HRMSSelect style={{ marginLeft: "30px" }} options={jobPositionOption} name="jobPositionId" placeholder="Pozisyon"/></Card.Content>
            </Grid.Column>
            <Grid.Column width={7}>   
            <Card.Content><Label size="large" color="green">Şehir</Label><HRMSSelect style={{ marginLeft: "30px" }} options={cityOption} name="cityId" placeholder="Şehir"/></Card.Content>
            </Grid.Column>
            <Grid.Column width={7}>  
            <CardContent><Label style={{ marginLeft: "160px" }}  size="large" color="green">Alınacak Personel</Label><HRMSTextInput style={{ marginLeft: "90px" }} name="positionNeed" placeholder="Kaç kişi alınacak"/></CardContent>
            </Grid.Column>
            <Grid.Column width={15}>  
            <Card.Content><Label size="large" color="green">Çalışma Şekli</Label><HRMSSelect style={{ marginLeft: "30px" }} options={workTypeOption} name="workTypeId" placeholder="Çalışma Şekli"/></Card.Content>
            </Grid.Column>
            <Grid.Column width={7}>  
            <Card.Content><Label size="large" color="green">Minimum Ücret</Label>< HRMSTextInput style={{ marginLeft: "30px" }} name="sallaryMin" placeholder="En az ücret"/></Card.Content>
            </Grid.Column>
            <Grid.Column width={7}>  
            <Card.Content><Label size="large" style={{ marginLeft: "160px" }}  color="green">Maksimum Ücret</Label>< HRMSTextInput style={{ marginLeft: "90px" }}  name="sallaryMax" placeholder="En fazla ücret"/></Card.Content>
            </Grid.Column>
            <Grid.Column  width={16}>  
            <CardContent><Button style={{ marginBottom: "20px" }} type="submit" icon labelPosition="right" color="purple" >Ekle<Icon name="add"></Icon></Button></CardContent>
            </Grid.Column>
            </Grid>
          </Card>
        </Form>


      </Formik>
    </div>
  );
}
