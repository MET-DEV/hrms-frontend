import React, { useEffect, useState } from 'react'
import { Form,Label} from 'semantic-ui-react'
import CityService from '../services/cityService'

export default function City() {
    const [cities,setCities]=useState([])
    useEffect(()=>{
        let cityService=new CityService()
        cityService.getCity().then(result=>setCities(result.data.data))
    },[])
    return (
     <Form>
          <Label color="blue" size="large">Şehirler</Label>
          <Form.Group widths='equal'>&nbsp;&nbsp;&nbsp;
          
          <Form.Field label='' control='select'>
              {cities.map((city)=>
              
                <option value='city'>{city.cityName}</option>
               
              
              )}
            </Form.Field>
           
            
        </Form.Group>
 
     </Form>
           
    )
}

