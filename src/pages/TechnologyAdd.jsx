import { Formik, Form } from 'formik';
import React from 'react'
import * as Yup from "yup";
import {
    Button,
    Icon,
    Label,
    Card,
    Grid,
   
  } from "semantic-ui-react";
import TechnologyService from '../services/technologyService'
import { toast } from 'react-toastify';
import HRMSTextInput from '../utilities/customFormControls/HRMSTextInput';
export default function TechnologyAdd() {
    const schema=Yup.object().shape({
        technologyName:Yup.string().required()
    })
    const initialValues={
      technologyName:""
  }
  const handleTech=(values)=>{
    return {
      technologyName:values.technologyName
    }
  }     
 
    return (
        <div>
            <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values)=>{
              console.log(values)
              let techService=new TechnologyService()
              let employeeId=1
              techService.add(handleTech(values),employeeId)
              toast.success("Teknoloji Eklendi")
              setTimeout(() => { window.location.reload() }, 4300);
            }}>

              <Form className="ui form">
                <Card centered fluid>
                  <Grid>
                    <Grid.Column  width={15}>
                      <Card.Content><Label size="large" style={{ marginLeft: "30px" }} color="green">Teknoloji</Label><HRMSTextInput style={{ marginLeft: "30px" }} name="technologyName" placeholder="Teknoloji Adı"/></Card.Content>
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
