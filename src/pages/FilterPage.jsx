import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router";
import CityService from '../services/cityService';
import JobPositionService from '../services/jobPositionService';
import WorkTypeService from '../services/workTypeService';
import {
    Button,
    Dropdown,
    
    Card,
    Form,
    
  } from "semantic-ui-react";

export default function FilterPage() {
   
  
    const history=useHistory()
    const formik = useFormik({
    
        initialValues: {
          jobPositionId:0,
          cityId:0,
          workTypeId:0
        },
        
        onSubmit: (values) => {
          console.log(values.workTypeId,values.cityId,values.jobPositionId)
          if(values.workTypeId.length===0){
            values.workTypeId=null
          }
          if(values.cityId.length===0){
            values.cityId=null
          }
          if(values.jobPositionId.length===0){
            values.jobPositionId=null
          }
          
         
         history.push(`/jobad/${values.cityId}/${values.jobPositionId}/${values.workTypeId}`)
         window.location.reload()
         
    
          
    
          
          
        },
      });

    
      
    const [workTypes, setWorkTypes] = useState([]);
    const [cities, setCities] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);
    useEffect(()=>{
        let cityService=new CityService()
        let workTypeService=new WorkTypeService()
        let jobPositionService=new JobPositionService()

        cityService.getCity().then((result)=>setCities(result.data.data))
        workTypeService.getAll().then((result)=>setWorkTypes(result.data.data))
        jobPositionService.getJobPosition().then((result)=>setJobPositions(result.data.data))

    },[])
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
        
            <Card centered style={{ marginLeft: "9px" }}>
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
              <Button
               
                content="Filtrele"
                labelPosition="right"
                icon="filter"
                positive
                type="submit"
                style={{ marginLeft: "20px" }}
              />

                    </Form>
                </Card.Content>

            </Card>
        
    )
}



