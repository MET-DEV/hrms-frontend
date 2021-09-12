import { Formik, Form } from 'formik';
import React from 'react'
import * as Yup from "yup";

import {
    Button,
   
    Card,
    Icon,
    Grid,
    Label
  } from "semantic-ui-react";
import HRMSTextInput from '../utilities/customFormControls/HRMSTextInput';
import Language from '../services/languageService';
import { toast } from 'react-toastify';
export default function LanguageAdd() {
    const schema=Yup.object().shape({
            language:Yup.string().required(),
            languageLevel:Yup.number().required()

    })
    const initialValues={
      language:"",
      languageLevel:""

  }
  const handleLanguage=(values)=>{
    return {
      language:values.language,
      languageLevel:values.languageLevel
    }
  }
  
   
      
        

        
  
    return (
        
        <div>
           <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values)=>{
              console.log(values)
              let languageService=new Language()
              let employeeId=1
              languageService.add(employeeId,handleLanguage(values))
              toast.success("Dil Eklendi")
              setTimeout(() => { window.location.reload() }, 4300);
            }}
           >
             <Form className="ui form">
               <Card centered fluid>
                 <Grid>
                 <Grid.Column  width={7}>
                    <Card.Content><Label style={{ marginLeft: "50px" }}  size="large" color="green">Dil</Label><HRMSTextInput style={{ marginLeft: "50px" }} name="language" placeholder="Dil ismi"/></Card.Content>
                  </Grid.Column>
                  <Grid.Column  width={7}>
                    <Card.Content><Label style={{ marginLeft: "190px" }} size="large" color="green">Dilin Seviyesi</Label><HRMSTextInput style={{ marginLeft: "100px" }}  name="languageLevel" placeholder="5 üzerinden seviyeniz kaç"/></Card.Content>
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
