import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup";
import {
    Button,
    Label,
    Input,
   
    Card,
    Form,
    Grid,
  } from "semantic-ui-react";
import EducationService from '../services/educationService';
import { toast } from 'react-toastify';

export default function EducationAdd() {
    const educationSchema=Yup.object().shape({
        startYear:Yup.number().required(),
        completionYear:Yup.number().required(),
        schoolName:Yup.string().required()

    })
    const formik=useFormik({
        initialValues:{
            completionYear:"",
            startYear:"",
            schoolName:""
        },
        validationSchema:educationSchema,
        onSubmit:(values)=>{
            let newEducation={
                completionYear:values.completionYear,
                schoolName:values.schoolName,
                startYear:values.startYear
            }
            let educationService=new EducationService()
            let employeeId=1
            educationService.add(newEducation,employeeId)
            toast.success("Dil Eklendi")
            setTimeout(() => { window.location.reload() }, 4300);
        }
        
    })
    const handleChangeSemantic=(value,fieldName)=>{
        formik.setFieldValue(fieldName,value)
    }
    return (
        <div>
            <Card centered fluid>
        <Card.Content><Label color="teal" size="huge">Eğitim Ekle</Label></Card.Content>
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <Label color="pink" size="large">Okul Adı</Label>
              <Input
                selection
                placeholder="Nerede okudunuz"
                onBlur={formik.onBlur}
                name="schoolName"
                id="schoolName"
                value={formik.values.schoolName}
                onChange={(event, data) =>
                    handleChangeSemantic(data.value,"schoolName")
                  }
                
              />
            </Form.Field>
            <Form.Field>
              <Grid stackable>
                <Grid.Column width={8}>
                  <Label color="purple" size="large">Başlangıç yılı</Label>
                  <Input
                  onBlur={formik.onBlur}
                    
                    type="number"
                    placeholder="Ne zaman başladınız"
                    name="startYear"
                    id="startYear"
                    onChange={formik.handleChange}
                    value={formik.values.startYear}
                  />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Label color="purple" size="large">Bitiş yılı</Label>
                  <Input
                  onBlur={formik.onBlur}
                    type="number"
                    value={formik.values.completionYear}
                    placeholder="Ne zaman bitirdiniz"
                    name="completionYear"
                    id="completionYear"
                    onChange={formik.handleChange}
                    
                  />
                </Grid.Column>
              </Grid>
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
