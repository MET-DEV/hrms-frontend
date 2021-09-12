import React from 'react'
import * as Yup from "yup";
import {
    Button,
    Label,
    Icon,
    Card,
    Grid,

    
  } from "semantic-ui-react";
import { Formik, Form } from 'formik';
import ContactService from '../services/contactService';
import { toast } from 'react-toastify';
import HRMSTextInput from '../utilities/customFormControls/HRMSTextInput';

export default function Contact() {
  
    const schema=Yup.object({
        linkedinAddress:Yup.string().required(),
        githubAddress:Yup.string().required()
})

const initialValues={
  linkedinAddress:"",
  githubAddress:""
}

const handleContact=(values)=>{
  return {
    linkedinAddress:values.linkedinAddress,
    githubAddress:values.githubAddress
  }
}
    
    return (
        <div>
          <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values)=>{
            console.log(values)
            let contactService=new ContactService()
            let employeeId=1
            contactService.add(handleContact(values),employeeId)
            toast.success("Bağlantılar Eklendi")
            setTimeout(() => { window.location.reload() }, 4300);
          }}
          >
            <Form className="ui form">
              <Card centered fluid>
                <Grid>
                <Grid.Column  width={7}>
                    <Card.Content><Label style={{ marginLeft: "30px" }}  size="large" color="blue">Linkedin</Label><HRMSTextInput style={{ marginLeft: "30px" }}  name="linkedinAddress" placeholder="Linkedin Adresi"/></Card.Content>
                  </Grid.Column>
                  <Grid.Column  width={7}>
                    <Card.Content><Label style={{ marginLeft: "190px" }} size="large" color="black">Github</Label><HRMSTextInput style={{ marginLeft: "100px" }} name="githubAddress" placeholder="Github Adresi"/></Card.Content>
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
