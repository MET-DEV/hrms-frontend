import React from "react";
import * as Yup from "yup";
import { Formik,Form } from "formik";
import HrmsStaffService from "../services/hrmsStaffService";
import { Button, Grid, Card, Label,Icon } from "semantic-ui-react";
import { toast } from "react-toastify";
import HRMSTextInput from "../utilities/customFormControls/HRMSTextInput";

export default function HrmsStaffAdd() {
  const schema = Yup.object().shape({
    firstName: Yup.string().required("İsim boş bırakılamaz"),
    lastName: Yup.string().required("Soyisim boş bırakılamaz"),
    email: Yup.string().required("Mail boş bırakılamaz"),
    password: Yup.string().required("Parola baş bırakılamaz"),
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const handleStaff = (values) => {
    return {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
          let hrmsService=new HrmsStaffService()
          hrmsService.add(handleStaff(values))
          toast.success("Personel Eklendi")
          setTimeout(() => { window.location.reload() }, 4300);
          
        }}
      >
        <Form className="ui form">
          <Card centered fluid>
            <Grid>
              <Grid.Column width={8}>
                <Card.Content>
                  <Label size="large" color="green">
                    İsim
                  </Label>
                  <HRMSTextInput
                    style={{ marginLeft: "30px" }}
                    name="firstName"
                    placeholder="İsim"
                  />
                </Card.Content>
              </Grid.Column>
              <Grid.Column width={8}>
                <Card.Content>
                  <Label size="large" color="green">
                    Soyisim
                  </Label>
                  <HRMSTextInput
                    style={{ marginLeft: "30px" }}
                    name="lastName"
                    placeholder="Soyisim"
                  />
                </Card.Content>
              </Grid.Column>
              <Grid.Column width={8}>
                <Card.Content>
                  <Label size="large" color="green">
                    Mail
                  </Label>
                  <HRMSTextInput
                    style={{ marginLeft: "30px" }}
                    name="email"
                    placeholder="Mail"
                  />
                </Card.Content>
              </Grid.Column>
              <Grid.Column width={8}>
                <Card.Content>
                  <Label size="large" color="green">
                    Parola
                  </Label>
                  <HRMSTextInput
                    style={{ marginLeft: "30px" }}
                    name="password"
                    placeholder="Parola"
                  />
                </Card.Content>
              </Grid.Column>
              <Grid.Column  width={16}>  
            <Card.Content><Button style={{ marginBottom: "20px" }} type="submit" icon labelPosition="right" color="purple" >Ekle<Icon name="add"></Icon></Button></Card.Content>
            </Grid.Column>
            </Grid>
          </Card>
        </Form>
      </Formik>
    </div>
  );
}
