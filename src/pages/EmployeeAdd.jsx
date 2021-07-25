import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import JobPositionService from "../services/jobPositionService";
import {
  Button,
  Dropdown,
  Input,

  Card,
  Form,

  Label,
} from "semantic-ui-react";
import { toast } from "react-toastify";
import EmployeeService from "../services/employeeService";

export default function EmployeeAdd() {
  const employeeAddSchema = Yup.object().shape({
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

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      jobPositionId: "",
      nationaltyId: "",
      password: "",
      rpassword: "",
      yearOfBirth: "",
    },
    validationSchema: employeeAddSchema,
    onSubmit: (values) => {
      let newEmployee = {
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        jobPositionId: values.jobPositionId,
        nationaltyId: values.nationaltyId,
        password: values.password,
        rpassword: values.rpassword,
        yearOfBirth: values.yearOfBirth,
      };
      console.log(newEmployee);
      let employeeService=new EmployeeService()
      employeeService.add(newEmployee)
      toast.success(values.firstName+" Kişisi Eklendi")
      setTimeout(() => { window.location.reload() }, 4300);
    },
  });
  const [jobPositions, setJobPositions] = useState([]);
  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService.getJobPosition().then((result) => setJobPositions(result.data.data));
  }, []);
  const jobPositionOptions = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.name,
    value: jobPosition.id,
  }));
  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
    
  };
  return (
    <div>
      <Card centered fluid>
        <Card.Content header="Çalışan Ekleme" />
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
            <Label color="blue" size={"large"}>TC No</Label>
                <Input
                  value={formik.values.nationaltyId}
                  onChange={formik.handleChange}
                  name="nationaltyId"
                  />
            </Form.Field>
            <Form.Field>
            <Label color="blue" size={"large"}>Mail Adresi</Label>
                <Input
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"

                />
            </Form.Field>
            <Form.Field>
            <label>Pozisyon</label>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Süresi"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "jobPositionId")
                  }
                  onBlur={formik.onBlur}
                  id="jobPositionId"
                  value={formik.values.jobPositionId}
                  options={jobPositionOptions}
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
            <Form.Field>
            <Label color="blue" size={"large"}>Tekrar Parola</Label>
                <Input
                  value={formik.values.rpassword}
                  onChange={formik.handleChange}
                  name="rpassword"
                  />
            </Form.Field>
            <Form.Field>
            <Label color="blue" size={"large"}>Doğum Yılı</Label>
                <Input
                  value={formik.values.yearOfBirth}
                  onChange={formik.handleChange}
                  name="yearOfBirth"
                  type="number"
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
  );
}
