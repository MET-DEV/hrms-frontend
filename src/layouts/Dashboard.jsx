import React from "react";
import { Route } from "react-router";
import { Grid } from "semantic-ui-react";
import JobAd from '../pages/JobAd'
import City from "../pages/City";
import JobPosition from "../pages/JobPosition";


export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
             <City/>
             <JobPosition/>
          </Grid.Column>
          <Grid.Column width={12}>
          <Route exact path="/" component={JobAd} />
            
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
