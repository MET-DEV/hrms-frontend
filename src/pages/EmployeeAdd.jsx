import { Formik,Form } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import JobPositionService from "../services/jobPositionService";
import {
  Icon,
  Button,
  Card,
  CardContent,
  Label
} from "semantic-ui-react";
import HRMSTextInput from "../utilities/customFormControls/HRMSTextInput";
import { toast } from "react-toastify";
import EmployeeService from "../services/employeeService";
import HRMSSelect from "../utilities/customFormControls/HRMSSelect";

export default function EmployeeAdd() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Alan boş bırakılamaz")
      .email("Geçerli bir mail giriniz"),
    firstName: Yup.string().required("Alan boş bırakılamaz"),
    lastName: Yup.string().required("Alan boş bırakılamaz"),
    jobPositionId: Yup.number().required("Boş bırakılamaz"),
    nationaltyId: Yup.string().required("Alan boş bırakılamaz"),
    password: Yup.string().required("Alan boş bırakılamaz"),
    rpassword: Yup.string().required("Lütfen parolayı tekrar giriniz"),
    yearOfBirth: Yup.number().required("Alan boş bırakılamaz"),
  });
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    jobPositionId: "",
    nationaltyId: "",
    password: "",
    rpassword: "",
    yearOfBirth: "",
  };

  const [jobPositions, setJobPositions] = useState([]);
  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPosition()
      .then((result) => setJobPositions(result.data.data));
  }, []);
  const jobPositionOptions = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.name,
    value: jobPosition.id,
  }));

  const handleEmployeeValue=(values)=>{
    
    return{
      firstName:values.firstName,
      lastName:values.lastName,
      jobPositionId:values.jobPositionId,
      nationaltyId:values.nationaltyId,
      email:values.email,
      password:values.password,
      rpassword:values.rpassword,
      yearOfBirth:values.yearOfBirth
  

    }
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          let employeeService=new EmployeeService()
          employeeService.add(handleEmployeeValue(values))
          toast.success("İşlem Tamamlandı!")
          
      }}>
        <Form className="ui form" >         
          <Card centered fluid>
          <Card.Content><Card.Header><Label size="large" color="purple"><Icon name="add"/>İş Arayan Ekleme Sayfası</Label></Card.Header></Card.Content>
          <CardContent> <HRMSTextInput name="firstName" placeholder="İsim" /></CardContent>                        
          <CardContent><HRMSTextInput name="lastName" placeholder="Soyisim" /></CardContent>  
          <CardContent> <HRMSTextInput name="nationaltyId" placeholder="TC" /></CardContent>      
          <CardContent> <HRMSTextInput name="email" placeholder="Mail" /></CardContent>
          <CardContent><HRMSSelect
              options={jobPositionOptions}
              name="jobPositionId"
              placeholder="Pozisyon"
            /></CardContent>
             
      <CardContent><HRMSTextInput name="password" placeholder="Parola" /></CardContent> 
      <CardContent><HRMSTextInput name="rpassword" placeholder="Tekrar Parola" /></CardContent>      
      <CardContent> <HRMSTextInput name="yearOfBirth" placeholder="Doğum Yılı" /></CardContent>
            <CardContent> <Button type="submit" icon labelPosition="right" color="green">
              Ekle<Icon name="add"></Icon>
            </Button></CardContent>
          </Card>
        </Form>
      </Formik>
    </div>
  );
}
