import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup";
import {
    Button,
    Label,
    TextArea,
    Card,
    Form,
    Grid,
  } from "semantic-ui-react";
import CvHeaderService from '../services/cvHeaderService';
import { toast } from 'react-toastify';

export default function HeaderAdd() {
    const headerSchema=Yup.object({
            cvHeader:Yup.string().required()
    })
    const formik=useFormik({
        initialValues:{
            cvHeader:""
        },
        validationSchema:headerSchema,
        onSubmit:(values)=>{
            let cvHeader={
                header:values.cvHeader
            }
              let cvService=new CvHeaderService()
              let employeeId=1
              cvService.add(cvHeader,employeeId)
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
      <Card.Content><Label color="teal" size="huge">Kişisel Açıklama Ekle</Label></Card.Content>
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            
            <Form.Field>
              <Grid stackable>
              <Grid.Column width={16}>
              <Label color="blue" size="large">Ön Açıklama</Label>
                  <TextArea
                  
                  
                  id="cvHeader"
                  name="cvHeader"
                  onChange={(event,data)=>
                    handleChangeSemantic(data.value,"cvHeader")
                  }
                  value={formik.values.cvHeader}
                  onBlur={formik.handleBlur}
                
                  placeholder="Ön açıklama"
                  
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
