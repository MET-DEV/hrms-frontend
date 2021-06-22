import React from "react";

import { Form, Button, Container } from "semantic-ui-react";

export default function EmployeesAdd() {
  return (
    <div>
      <Container>
        <br />
        <br />
        <br />
        <Form>
          <Form.Group unstackable widths={2}>
            <Form.Input label="Ad" placeholder="Ad" />
            <Form.Input label="Soyad" placeholder="Soyad" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field label="Şehir" control="select"></Form.Field>
            
            <Form.Input label="Linkedin Adresi" placeholder="Linkedin Adresi" />
          </Form.Group>


          <Form.Group widths="equal">
            
            
            <Form.Input label="Github Adresi"placeholder="Github Adresi"/>
            <Form.Input label="TC No"placeholder="TC No"/>
            
          </Form.Group>

          <Form.Group widths="equal">
            
            
            <Form.Input label="Lise"placeholder="Lise Adı"/>
            <Form.Input label="Lise"placeholder="Başlama Yılı"/>
            
          </Form.Group>
          <Form.Group widths="equal">
            
            
            <Form.Input label="Üniversite"placeholder="Üniversite Adı"/>
            <Form.Input label="Üniversite"placeholder="Başlama Yılı"/>
            
          </Form.Group>

          <Form.Group widths="equal">
            
            
            <Form.Input label="Email Adresi"placeholder="Email Adresi"/>
            <Form.Field label="Tercihi Pozisyon" control="select"></Form.Field>
            
          </Form.Group>

          <Form.Group widths="equal">
            
            
            <Form.Input label="Parola"placeholder="Parola"/>
            <Form.Input label="Tekrar Parola"placeholder="Tekrar Parola"/>
            
            
          </Form.Group>
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  );
}
