import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup";
import {
    Button,
    Input,
    Label,
    Card,
    Form,
  } from "semantic-ui-react";
import TechnologyService from '../services/technologyService'
import { toast } from 'react-toastify';
export default function TechnologyAdd() {
    const technologySchema=Yup.object().shape({
        technologyName:Yup.string().required()
    })
    const formik=useFormik({
        initialValues:{
            technologyName:""
        },
        validationSchema:technologySchema,
        onSubmit:(values)=>{
            let newTech={
                technologyName:values.technologyName
            }
            let techService=new TechnologyService()
            let employeeId=1
            
            techService.add(newTech,employeeId)
            toast.success("Teknoloji Eklendi")
            setTimeout(() => { window.location.reload() }, 4300);
            
        }

    })
    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
        
      };
    return (
        <div>
             <Card centered fluid>
             <Card.Content><Label color="teal" size="huge">Teknoloji Ekle</Label></Card.Content>
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <Label color="pink" size="large">Teknoloji Adı</Label>
              <Input
                selection
                placeholder="Teknoloji Adı"
                onBlur={formik.onBlur}
                name="technologyName"
                id="technologyName"
                value={formik.values.technologyName}
                onChange={(event, data) =>
                    handleChangeSemantic(data.value,"technologyName")
                  }
                
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
