import React from 'react'
import { Form } from 'semantic-ui-react'

export default function JobPosition() {
    return (
        <Form>
          <Form.Group widths='equal'>
           
            <Form.Field label='İş Pozisyonu' control='select'>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </Form.Field>
        </Form.Group>
 
     </Form>
    )
}
