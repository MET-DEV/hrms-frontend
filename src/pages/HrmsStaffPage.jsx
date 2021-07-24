import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import * as Yup from "yup";
import HrmsStaffService from '../services/hrmsStaffService'
import { Button, Card, Header, Label,Input,Form } from 'semantic-ui-react'
import { useFormik } from 'formik';
export default function HrmsStaffPage() {
    const[staff,setStaff]=useState({})
    useEffect(()=>{
        
        let id=1
        let hrmsService=new HrmsStaffService()
        hrmsService.getById(id).then((result)=>setStaff(result.data.data))
        
    })

    const passwordSchema=Yup.object().shape({
        password:Yup.string().required()
    })
    const formik2=useFormik({
        initialValues:{
            password:""
        },
        validationSchema:passwordSchema,
        onSubmit:(values)=>{
            let newStaff=staff
            newStaff.password=values.password
            let staffService=new HrmsStaffService()
            staffService.add(newStaff)
            window.location.reload()
           
        }
    })


    const mailSchema=Yup.object().shape({
        mail:Yup.string().email().required()
    })
    const formik=useFormik({
        initialValues:{
            mail:""
        },
        validationSchema:mailSchema,
        onSubmit:(values)=>{
            let newStaff=staff
            newStaff.email=values.mail
            let staffService=new HrmsStaffService()
            staffService.add(newStaff)
            window.location.reload()
           
        }
    })
    return (
        <div>
            <Card fluid>
            <Card.Content>
                <Card.Header><Label color="green" size="huge">Personel</Label> </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Header><Label color="teal" size="big">Ad Soyad</Label></Header>
                    <Card.Description>{staff.firstName} {staff.lastName}</Card.Description>
                </Card.Content>
                <Card.Content>
                    <Header><Label color="orange" size="big">Email</Label></Header>
                    <Card.Description>{staff.email}</Card.Description>
                    <Form onSubmit={formik.handleSubmit}>
                <Input
                
                value={formik.values.mail}
                onChange={formik.handleChange}
                name="mail"

                />
                <Button
               
               content="Değiştir"
               labelPosition="right"
               icon="add"
               positive
               type="submit"
               style={{ marginLeft: "20px" }}
             />
                </Form>
                </Card.Content>


                <Card.Content>
                    <Header><Label color="orange" size="big">Parola</Label></Header>
                    <Card.Description>{staff.password}</Card.Description>
                    <Form onSubmit={formik2.handleSubmit}>
                <Input
                
                value={formik2.values.password}
                onChange={formik2.handleChange}
                name="password"

                />
                <Button
               
               content="Değiştir"
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
