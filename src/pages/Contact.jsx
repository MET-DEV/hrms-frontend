import React from 'react'
import * as Yup from "yup";
import {
    Button,
    Label,
    Input,
    Card,
    Form,
    
  } from "semantic-ui-react";
import { useFormik } from 'formik';
import ContactService from '../services/contactService';
import { toast } from 'react-toastify';
export default function Contact() {
  //commit test
    const contactSchema=Yup.object({
        linkedinAddress:Yup.string().required(),
        githubAddress:Yup.string().required()
})
const formik=useFormik({
    initialValues:{
        linkedinAddress:"",
        githubAddress:""
    },
    validationSchema:contactSchema,
    onSubmit:(values)=>{
        let contact={
            linkedinAddress:values.linkedinAddress,
            githubAddress:values.githubAddress
        }
          let contactService=new ContactService()
          let employeeId=1
          contactService.add(contact,employeeId)
          toast.success("Bağlantılar Eklendi")
          setTimeout(() => { window.location.reload() }, 4300);
         
    }
    
})
    return (
        <div>
            <Card centered fluid>
            <Card.Content><Label color="teal" size="huge">Bağlantı Ekle</Label></Card.Content>
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Form.Field width={8}>
                  <Label color="blue" size={"large"}>Linkedin Adresi</Label>
                  <Input
                  value={formik.values.linkedinAddress}
                  onChange={formik.handleChange}
                  name="linkedinAddress"
                  />
              </Form.Field>
               
             
              <Form.Field width={8}>
              <Label color="black" size={"large"}>Github Adresi</Label>
                  <Input
                  value={formik.values.githubAddress}
                  onChange={formik.handleChange}
                  name="githubAddress"
                  />
              </Form.Field>
            </Form.Group>
            
            <Button
               
                content="Ekle"
                labelPosition="right"
                icon="add"
                positive
                type="submit"
                style={{ marginLeft: "20px" }}
              />
            
          </Form>

        </Card.Content>
      </Card>
        </div>
    )
}
