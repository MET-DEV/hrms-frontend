import React from "react";
import { Route } from "react-router";
import { Grid } from "semantic-ui-react";
import JobAd from "../pages/JobAd";
import JobAdDetail from "../pages/JobAdDetail";
import Employee from "../pages/Employee";
import JobAdadd from "../pages/JobAdadd";
import PassiveJobAd from "../pages/PassiveJobAd"
import EmployeeAdd from "../pages/EmployeeAdd";
import { ToastContainer } from "react-toastify";
import ExperienceAdd from "../pages/ExperienceAdd";
import HeaderAdd from "../pages/HeaderAdd";
import LanguageAdd from "../pages/LanguageAdd";
import EducationAdd from "../pages/EducationAdd";
import TechnologyAdd from "../pages/TechnologyAdd";
import CvAdd from "../pages/CvAdd";
import EmployeeCv from "../pages/EmployeeCv";
import FilterPage from "../pages/FilterPage";
import LoginEmployeeCv from "../pages/LoginEmployeeCv";
import HrmsStaffAdd from "../pages/HrmsStaffAdd";
import HrmsStaffPage from "../pages/HrmsStaffPage";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="top-right"/>

      
      <Grid>
        <Grid.Row>
          <Grid.Column className="eight column row" width={3}style={{ marginLeft: "2px" }}>
           <FilterPage  />
          </Grid.Column >
          <Grid.Column width={12}>
            <Route exact path="/" component={JobAd} />
            <Route exact path="/jobad" component={JobAd} />
            <Route exact path="/jobad/:cityId/:jobPositionId/:workTypeId" component={JobAd} />
            <Route exact path="/employees" component={Employee} />
            <Route exact path="/jobad/:id" component={JobAdDetail} />
            <Route exact path="/cv/:id" component={EmployeeCv} />
            <Route exact path="/employeeadd" component={EmployeeAdd} />
            <Route exact path="/jobadvad" component={JobAdadd} />
            <Route exact path="/passivead" component={PassiveJobAd} />
            <Route exact path="/experience" component={ExperienceAdd} />
            <Route exact path="/header" component={HeaderAdd} />
            <Route exact path="/language" component={LanguageAdd} />
            <Route exact path="/education" component={EducationAdd} />
            <Route exact path="/tech" component={TechnologyAdd} />
            <Route exact path="/cvadd" component={CvAdd} />
            <Route exact path="/mycv" component={LoginEmployeeCv} />
            <Route exact path="/staff/add" component={HrmsStaffAdd} />
            <Route exact path="/staffs" component={HrmsStaffPage} />
            

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
