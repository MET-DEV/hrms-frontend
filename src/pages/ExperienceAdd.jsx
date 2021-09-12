import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import {
  Button,
  Label,
  Icon,
  Card,
  
  Grid,
} from "semantic-ui-react";
import ExperienceService from "../services/experienceService"
import { toast } from "react-toastify";
import HRMSTextInput from "../utilities/customFormControls/HRMSTextInput";
import HRMSTextArea from '../utilities/customFormControls/HRMSTextArea'

export default function ExperienceAdd() {
  const schema = Yup.object().shape({
    completionYear: Yup.number().required(),
    description: Yup.string().required(),
    startYear: Yup.number().required(),
    where: Yup.string().required(),
  });

  const initialValues={
    completionYear: "",
    description: "",
    startYear: "",
    where: "",
  }

  const handleExperience=(values)=>{
    return {
      completionYear: values.completionYear,
      description: values.description,
      startYear: values.startYear,
      where: values.where,
    }
  }

  return (
    <div>
     <Formik
     initialValues={initialValues}
     validationSchema={schema}
     onSubmit={(values)=>{
      
      let experienceService=new ExperienceService()
      let employeeId=1
      experienceService.add(handleExperience(values),employeeId)
      toast.success("Tecrübe eklendi")
      setTimeout(() => { window.location.reload() }, 4300);
     }}>
       <Form className="ui form">
         <Card centered fluid>
           <Grid>
            <Grid.Column  width={15}>
              <Card.Content><Label size="large" color="green">Nerede</Label><HRMSTextInput  name="where" placeholder="Tecrübe Yeri"/></Card.Content>
            </Grid.Column>
            <Grid.Column  width={8}>
              <Card.Content><Label size="large" color="green">Başlangıç</Label><HRMSTextInput  name="startYear" placeholder="Başlama zamanı"/></Card.Content>
            </Grid.Column>
            <Grid.Column  width={8}>
              <Card.Content><Label size="large" color="green">Bitiş</Label><HRMSTextInput  name="completionYear" placeholder="Bitiş zamanı"/></Card.Content>
            </Grid.Column>
            <Grid.Column  width={16}>
              <Card.Content><Label size="large" color="green">Açıklama</Label><HRMSTextArea  name="description" placeholder="Açıklama"/></Card.Content>
            </Grid.Column>
          
            <Grid.Column  width={16}>  
              <Card.Content><Button style={{ marginBottom: "20px" }} type="submit" icon labelPosition="right" color="purple" >Ekle<Icon name="add"></Icon></Button></Card.Content>
            </Grid.Column>
          </Grid>
         </Card>

       </Form>


     </Formik>
    </div>
  );
}
