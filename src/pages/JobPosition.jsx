import React, { useEffect, useState } from 'react'
import { Form,Label } from 'semantic-ui-react'
import JobPositionService from '../services/jobPositionService'

export default function JobPosition() {
    const [jobPositions,setJobPositions]=useState([])
    useEffect(()=>{
        let jobPositionService=new JobPositionService()
        jobPositionService.getJobPosition().then(result=>setJobPositions(result.data.data))
    
    },[])
    return (
        <Form>
            <Label color="blue" size="large">İş Pozisyonları</Label>
          <Form.Group widths='equal'>&nbsp;&nbsp;
          
            <Form.Field   label='' style={{fontSize: '12px'}} control='select'>
                {jobPositions.map((jobPosition)=>
                    <option value='jobposition'>{(jobPosition.name).toUpperCase()}</option>
                )}
                
                
            </Form.Field>
        </Form.Group>
 
     </Form>
    )
}
