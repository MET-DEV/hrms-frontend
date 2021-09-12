import { Formik, Form } from 'formik';
import React from 'react'
import * as Yup from "yup";
import {
    Button,
    Label,
    
    Card,
    Icon,
    Grid,
  } from "semantic-ui-react";
import HRMSTextArea from '../utilities/customFormControls/HRMSTextArea';
import CvHeaderService from '../services/cvHeaderService';
import { toast } from 'react-toastify';

export default function HeaderAdd() {
    const schema=Yup.object({
            cvHeader:Yup.string().required()
    })

    const initialValues={
        cvHeader:""
    }

    const heandleHeader=(values)=>{
      return {
        header:values.cvHeader
      }
    }
    
        
        
        
          
                
            
              
        
        
    
    
    return (
        
        <div>
            <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values)=>{
              console.log(values)
              //let cvService=new CvHeaderService()
              //let employeeId=1
              //cvService.add(cvHeader,employeeId)
              //toast.success("Ön yazı eklendi")
              //setTimeout(() => { window.location.reload() }, 4300);
            }}
            >
              <Form className="ui form">
                <Card centered fluid>
                  <Grid>
                    <Grid.Column  width={15}>
                      <Card.Content><Label size="large" style={{ marginLeft: "30px" }} color="green">Ön Açıklama</Label><HRMSTextArea style={{ marginLeft: "30px" }}  name="cvHeader" placeholder="Ön açıklama"/></Card.Content>
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
