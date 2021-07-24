import React from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik';
import HrmsStaffService from '../services/hrmsStaffService'
import {
    Button,
    Dropdown,
    Input,
  
    Card,
    Form,
  
    Label,
  } from "semantic-ui-react";
import { toast } from 'react-toastify';

export default function HrmsStaffAdd() {
    
    const staffSchema=Yup.object().shape({
        firstName:Yup.string().required(),
        lastName:Yup.string().required(),
        email:Yup.string().required(),
        password:Yup.string().required()
    })
    const formik=useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            email:"",
            password:""
        },
        validationSchema:staffSchema,
        onSubmit:(values)=>{
            let staff={
                firstName:values.firstName,
                lastName:values.lastName,
                email:values.email,
                password:values.password
            }
            let hrmsService=new HrmsStaffService()
            hrmsService.add(staff)
            toast.success("Personel Eklendi")
            setTimeout(() => { window.location.reload() }, 4300);
            
            
          
        }
    })
    
    return (
        <div>
            
      <Card centered fluid>
        <Card.Content header="Personel Ekleme" />
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Form.Field width={8}>
                  <Label color="blue" size={"large"}>İsim</Label>
                  <Input
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  name="firstName"
                  />
              </Form.Field>
               
             
              <Form.Field width={8}>
              <Label color="blue" size={"large"}>Soy İsim</Label>
                  <Input
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  name="lastName"
                  />
              </Form.Field>
            </Form.Group>
            
            <Form.Field>
            <Label color="blue" size={"large"}>Mail Adresi</Label>
                <Input
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"

                />
            </Form.Field>
            
            
            <Form.Field>
            <Label color="blue" size={"large"}>Parola</Label>
                <Input
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  name="password"

                  />
            </Form.Field>
            
            
            
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
