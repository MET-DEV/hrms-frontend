import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import {
  Button,
  Label,
  Input,
  TextArea,
  Card,
  Form,
  Grid,
} from "semantic-ui-react";
import ExperienceService from "../services/experienceService"
import { toast } from "react-toastify";

export default function ExperienceAdd() {
  const experienceSchema = Yup.object().shape({
    completionYear: Yup.number().required(),
    description: Yup.string().required(),
    startYear: Yup.number().required(),
    where: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      completionYear: "",
      description: "",
      startYear: "",
      where: "",
    },
    validationSchema: experienceSchema,
    onSubmit: (values) => {
      let experience = {
        completionYear: values.completionYear,
        description: values.description,
        startYear: values.startYear,
        where: values.where,
      };
      let experienceService=new ExperienceService()
      let employeeId=1
      experienceService.add(experience,employeeId)
      toast.success("Tecrübe eklendi")
      setTimeout(() => { window.location.reload() }, 4300);
    },
  });
  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
    console.log(value)
  };
  return (
    <div>
      <Card centered fluid>
      <Card.Content><Label color="teal" size="huge">Tecrübe Ekle</Label></Card.Content>
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
            <Label color="blue" size="large">Nerede</Label>
              <Input
                selection
                placeholder="Tecrübe yeri"
                onBlur={formik.onBlur}
                name="where"
                id="where"
                value={formik.values.where}
                onChange={(event, data) =>
                    handleChangeSemantic(data.value,"where")
                  }
                
              />
            </Form.Field>
            <Form.Field>
              <Grid stackable>
                <Grid.Column width={8}>
                <Label color="blue" size="large">Başlangıç Yılı</Label>
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
                  <Label color="orange" size="large">Bitiş yılı</Label>
                  <Input
                  onBlur={formik.onBlur}
                    type="number"
                    value={formik.values.completionYear}
                    placeholder="Ne zaman ayrıldınız"
                    name="completionYear"
                    id="completionYear"
                    onChange={formik.handleChange}
                    
                  />
                </Grid.Column>
              </Grid>
            </Form.Field>
            <Form.Field>
              <Grid stackable>
              <Grid.Column width={16}>
              <Label color="purple" size="large">Açıklama</Label>
                  <TextArea
                  
                  
                  id="description"
                  name="description"
                  onChange={(event,data)=>
                    handleChangeSemantic(data.value,"description")
                  }
                  value={formik.values.description}
                  onBlur={formik.handleBlur}
                
                  placeholder="Açıklama"
                  
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
  );
}
