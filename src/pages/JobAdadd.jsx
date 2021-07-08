import React, { useEffect, useState } from "react";
import JobAddService from "../services/jobAdService";
import * as Yup from "yup";
import {  useFormik } from "formik";
import {
  Button,
  Dropdown,
  Input,
  TextArea,
  Card,
  Form,
  Grid,
} from "semantic-ui-react";
import CityService from "../services/cityService";
import JobPositionService from "../services/jobPositionService";
import WorkTypeService from "../services/workTypeService";
import { toast } from "react-toastify";


export default function JobAdadd() {
  
  let jobAdService = new JobAddService();
  const jobAddSchema = Yup.object().shape({
    jobTitle: Yup.string().required("Başlık zorunludur"),
    positionNeed: Yup.number().required(
      "Lütfen ihtiyacınız olan kişi sayısını boş bırakmayınız"
    ),
    workTypeId: Yup.number()
      .min(0, "0 dan az olamaz")
      .required("Alan boş bırakılamaz"),
    jobPositionId: Yup.number()
      .min(0, "0 dan az olamaz")
      .required("Alan boş bırakılamaz"),
    
    description: Yup.string().required("Açıklama yazmalısınız"),
    cityId: Yup.number()
      .min(0, "0 dan az olamaz")
      .required("Alan boş bırakılamaz"),
    sallaryMin: Yup.number()
      .min(0, "0 dan az olamaz")
      .required("Alan boş bırakılamaz"),
    sallaryMax: Yup.number()
      .min(0, "0 Dan az olamaz")
      .required("Alan boş bırakılamaz"),
  });
 
  const formik = useFormik({
    
    initialValues: {
      jobTitle: "",
      jobPositionId: "",
      workTypeId: "",
      positionNeed: "",

      description: "",
      cityId: "",
      sallaryMax: "",
      sallaryMin: "",
    },
    validationSchema: jobAddSchema,
    onSubmit: (values) => {
      let newJobAdd={
        jobTitle:values.jobTitle,
        positionNeed:values.positionNeed,
        sallaryMax:values.sallaryMax,
        sallaryMin:values.sallaryMin,
        description:values.description,
        city:{
          id:values.cityId
        },
        employer:{
          id:1
        },
        jobPosition:{
          id:values.jobPositionId
        },
        workType:{
          id:values.workTypeId
        }

      }
      console.log(newJobAdd)
      jobAdService.add(newJobAdd).then((result)=>console.log(result.message))
      toast.success("İlan pasif bir şekilde sistemimize eklendi. Personelimiz İnceleyecektir")
      setTimeout(() => { window.location.reload() }, 4300);
     

      

      
      
    },
  });
  
  const [workTypes, setWorkTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    let jobPositionService = new JobPositionService();
    let workTypeService = new WorkTypeService();
    
    console.log(formik.values)

    cityService.getCity().then((result) => setCities(result.data.data));
    jobPositionService
      .getJobPosition()
      .then((result) => setJobPositions(result.data.data));
    workTypeService.getAll().then((result) => setWorkTypes(result.data.data));
  },[]);
  

  const workTypeOption = workTypes.map((worktype, index) => ({
    key: index,
    text: worktype.workTypeName,
    value: worktype.id,
  }));

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));
  const jobPositionOption = jobPositions.map((jobPosition, index) => ({
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
        <Card.Content header="İş İlanı Ekleme" />
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field style={{ marginBottom: "1rem" }}>
              <label>İş Pozisyonu</label>
              <Dropdown
                clearable
                item
                placeholder="İş Pozisyonu"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "jobPositionId")
                }
                onBlur={formik.onBlur}
                id="jobPositionId"
                value={formik.values.jobPositionId}
                options={jobPositionOption}
              />
            </Form.Field>
            <Form.Field>
              <label>Şehir</label>
              <Dropdown
                clearable
                item
                placeholder="Şehir"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "cityId")
                }
                onBlur={formik.onBlur}
                id="cityId"
                value={formik.values.cityId}
                options={cityOption}
              />
            </Form.Field>
            <Form.Field>
            <label>Çalışma Süresi</label>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Süresi"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workTypeId")
                  }
                  onBlur={formik.onBlur}
                  id="workTypeId"
                  value={formik.values.workTypeId}
                  options={workTypeOption}
                />
                {formik.errors.workTypeId && formik.touched.workTypeId && (
                  <div className={"ui pointing red basic label"}>{formik.errors.workTypeId}</div>
                )}
             
              </Form.Field>
              <Form.Field>
              <Grid stackable>
              <Grid.Column width={16}>
              <label>İlan Başlığı</label>
                  <TextArea
                  style={{width:"100%",minHeight:33} }
                  
                  id="jobTitle"
                  name="jobTitle"
                  onChange={(event,data)=>
                    handleChangeSemantic(data.value,"jobTitle")
                  }
                  value={formik.values.jobTitle}
                  onBlur={formik.handleBlur}
                
                  placeholder="İlan Başlığı"
                  
                  />

              </Grid.Column>
              </Grid>
              
                  
              </Form.Field>
              <Form.Field>
              <Grid stackable>
              <Grid.Column width={16}>
              <label style={{fontWeight: "bold"}}>Alınacak Kişi</label>
                <Input
                  style={{ width: "100%" }}
                  id="positionNeed"
                  name="positionNeed"
                  error={Boolean(formik.errors.positionNeed)}
                  onChange={formik.handleChange}
                  value={formik.values.positionNeed}
                  onBlur={formik.handleBlur}
                  type="number"
                  placeholder="İhtiyaç duyulan kişi"
                />
                {formik.errors.positionNeed && formik.touched.positionNeed && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.openPositions}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              
              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
              <label style={{fontWeight: "bold"}}>Maaş aralığı MİNİMUM</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maaş aralığı MİNİMUM"
                  value={formik.values.sallaryMin}
                  name="sallaryMin"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.sallaryMin && formik.touched.sallaryMin && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.sallaryMin}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{fontWeight: "bold"}}>Maaş aralığı MAKSİMUM</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maaş aralığı MAKSİMUM"
                  value={formik.values.sallaryMax}
                  name="sallaryMax"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.sallaryMax && formik.touched.sallaryMax && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.sallaryMax}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>
                
                <Form.Field>
                  
                </Form.Field>
              <Form.Field>
              <label>Açıklama</label>
                <TextArea
                  placeholder="Açıklama"
                  style={{ minHeight: 200 }}
                  error={Boolean(formik.errors.description).toString()}
                  value={formik.values.description}
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.description && formik.touched.description && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.description}
                  </div>
                )}
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
