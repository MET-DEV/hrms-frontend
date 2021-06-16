import React, { useEffect, useState } from 'react'
import { Form,FormGroup } from 'semantic-ui-react'
import CityService from '../services/cityService'

export default function City() {
    const [cities,setCities]=useState([])
    useEffect(()=>{
        let cityService=new CityService()
        cityService.getCity().then(result=>setCities(result.data.data))
    },[])
    return (
     <Form>
          <Form.Group widths='equal'>
          <Form.Field label='Şehir' control='select'>
              {cities.map((city)=>
              
                <option value='city'>{city.cityName}</option>
               
              
              )}
            </Form.Field>
           
            
        </Form.Group>
 
     </Form>
           
    )
}

