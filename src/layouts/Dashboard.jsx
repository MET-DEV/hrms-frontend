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
import EmployeeAdd from "../pages/EmployeeAdd";
import { ToastContainer } from "react-toastify";
import ExperienceAdd from "../pages/ExperienceAdd";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="top-right"/>

      
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
            <Route exact path="/employeeadd" component={EmployeeAdd} />
            <Route exact path="/jobadvad" component={JobAdadd} />
            <Route exact path="/passivead" component={PassiveJobAd} />
            <Route exact path="/experience" component={ExperienceAdd} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
