import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup";

import {
    Button,
    Input,
    Card,
    Form,
    Grid,
    Label
  } from "semantic-ui-react";
import Language from '../services/languageService';
import { toast } from 'react-toastify';
export default function LanguageAdd() {
    const languageSchema=Yup.object().shape({
            language:Yup.string().required(),
            languageLevel:Yup.number().required()

    })
    const formik=useFormik({
        initialValues:{
            language:"",
            languageLevel:""

        },
        validationSchema:languageSchema,
        onSubmit:(values)=>{
            let newLanguage={
                language:values.language,
                languageLevel:values.languageLevel
            }
            let languageService=new Language()
            let employeeId=1
            languageService.add(employeeId,newLanguage)
            toast.success("Dil Eklendi")
            setTimeout(() => { window.location.reload() }, 4300);

        }
    })
    return (
        
        <div>
            <Card centered fluid>
            <Card.Content><Label color="teal" size="huge">Dil Ekle</Label></Card.Content>
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            
            
            <Form.Field>
              <Grid stackable>
                <Grid.Column width={8}>
                  <Label color="pink" size="large">Dil</Label>
                  <Input
                  onBlur={formik.onBlur}
                    
                    type="string"
                    placeholder="Dilin adı"
                    name="language"
                    id="language"
                    onChange={formik.handleChange}
                    value={formik.values.language}
                  />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Label color="pink" size="large">Dilin Seviyesi</Label>
                  <Input
                  onBlur={formik.onBlur}
                    type="number"
                    value={formik.values.languageLevel}
                    placeholder="Dildeki seviyeniz 5 üzerinden"
                    name="languageLevel"
                    id="languageLevel"
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
