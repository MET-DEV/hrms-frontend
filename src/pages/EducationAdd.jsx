import { Formik, Form } from 'formik';
import React from 'react'
import * as Yup from "yup";
import HRMSTextInput from '../utilities/customFormControls/HRMSTextInput'
import {
    Button,
    Label,
    Icon,
   
    Card,
  
    Grid,
  } from "semantic-ui-react";
import EducationService from '../services/educationService';
import { toast } from 'react-toastify';

export default function EducationAdd() {
    const schema=Yup.object().shape({
        startYear:Yup.number().required(),
        completionYear:Yup.number().required(),
        schoolName:Yup.string().required()

    })
    const initialValues={
      completionYear:"",
      startYear:"",
      schoolName:""
  }
  const handleEducation=(values)=>{
    return {
      completionYear:values.completionYear,
      schoolName:values.schoolName,
      startYear:values.startYear
    }
  }
    
    
    return (
        <div>
          <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values)=>{
            console.log(values)
            let educationService=new EducationService()
            let employeeId=1
            educationService.add(handleEducation(values),employeeId)
            toast.success("Eğitim bilgisi eklendi")
            setTimeout(() => { window.location.reload() }, 4300);
          }}>
            <Form className="ui form">
              <Card centered fluid>
                <Grid>

             
                  <Grid.Column  width={15}>
                      <Card.Content><Label size="large" color="green">Okul İsmi</Label><HRMSTextInput style={{ marginLeft: "30px" }}  name="schoolName" placeholder="Okul ismi"/></Card.Content>
                  </Grid.Column>
                  <Grid.Column  width={7}>
                    <Card.Content><Label size="large" color="green">Başlangıç Yılı</Label><HRMSTextInput style={{ marginLeft: "30px" }}  name="startYear" placeholder="Başlama Yılı"/></Card.Content>
                  </Grid.Column>
                  <Grid.Column  width={7}>
                    <Card.Content><Label style={{ marginLeft: "190px" }}  size="large" color="green">Bitirme Yılı</Label><HRMSTextInput style={{ marginLeft: "100px" }}  name="completionYear" placeholder="Bitme Yılı"/></Card.Content>
                  </Grid.Column>
                  <Grid.Column  width={16}>  
                    <Card.Content><Button style={{ marginBottom: "20px" }} type="submit" icon labelPosition="right" color="purple" >Ekle<Icon name="add"></Icon></Button></Card.Content>
                  </Grid.Column>
                  </Grid>
              </Card>
            </Form>



          </Formik>
            
        </div>
    )
}
