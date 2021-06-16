import React, { useEffect, useState } from 'react'
import { Form } from 'semantic-ui-react'
import JobPositionService from '../services/jobPositionService'

export default function JobPosition() {
    const [jobPositions,setJobPositions]=useState([])
    useEffect(()=>{
        let jobPositionService=new JobPositionService()
        jobPositionService.getJobPosition().then(result=>setJobPositions(result.data.data))
    
    },[])
    return (
        <Form>
          <Form.Group widths='equal'>
           
            <Form.Field label='İş Pozisyonu' control='select'>
                {jobPositions.map((jobPosition)=>
                    <option  value='jobposition'>{(jobPosition.name).toUpperCase()}</option>
                )}
                
                
            </Form.Field>
        </Form.Group>
 
     </Form>
    )
}
