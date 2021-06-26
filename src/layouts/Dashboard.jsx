import React from "react";
import { Route } from "react-router";
import { Grid } from "semantic-ui-react";
import JobAd from "../pages/JobAd";
import City from "../pages/City";
import JobPosition from "../pages/JobPosition";
import JobAdDetail from "../pages/JobAdDetail";
import Employee from "../pages/Employee";
import EmployeesAdd from "../pages/EmployeesAdd";
import JobAdadd from "../pages/JobAdadd";
import PassiveJobAd from "../pages/PassiveJobAd"

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column className="eight column row" width={3}>
           <City />
            <JobPosition />
          </Grid.Column >
          <Grid.Column width={12}>
            <Route exact path="/" component={JobAd} />
            <Route exact path="/jobad" component={JobAd} />
            <Route exact path="/employees" component={Employee} />
            <Route exact path="/jobad/:id" component={JobAdDetail} />
            <Route exact path="/employeeadd" component={EmployeesAdd} />
            <Route exact path="/jobadvad" component={JobAdadd} />
            <Route exact path="/passivead" component={PassiveJobAd} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
