import React from 'react'
import { Form,FormGroup } from 'semantic-ui-react'

export default function City() {
    return (
     <Form>
          <Form.Group widths='equal'>
           
            <Form.Field label='Şehir' control='select'>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </Form.Field>
        </Form.Group>
 
     </Form>
           
    )
}

