import { Step, StepLabel, Stepper } from "@mui/material";
import BasicDetails from "./Page/Property Registration/Basicdetails";
import LocationDetails from "./Page/Property Registration/Locationdetails";
import PropertyDetails from "./Page/Property Registration/Propertydetails";
import { multiStepContext } from "./StepContext";
import { useContext } from "react";
import DisplayData from "./Page/Property Registration/Displaydata";

import MyCounter from './Page/count redux/Count'
import Book from './Page/count redux/Book'
import Counttool from "./Page/redux toolkit page/Count";

function App() {

  // const { currentStep, finalData } = useContext(multiStepContext);
  // function showStep(step) {
  //   switch (step) {
  //     case 1:
  //       return <BasicDetails />
  //     case 2:
  //       return <LocationDetails />
  //     case 3:
  //       return <PropertyDetails />
  //   }
  // }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello Print</h1>
      <Stepper style={{ width: '80%', paddingLeft: '10%' }} activeStep={0} orientation="horizontal" >
        <Step>
          <StepLabel>Basic Details</StepLabel>
        </Step>
        <Step>
          <StepLabel>Location Details</StepLabel>
        </Step>
        <Step>
          <StepLabel>Property Details</StepLabel>
        </Step>
      </Stepper>

      {/* <MyCounter />
      <h1>Book Details</h1>
      <Book /> */}
      <Counttool />

      {/* {showStep(currentStep)}
      {
        finalData.length > 0 ? <DisplayData /> : ''
      } */}
    </div>

  );
}

export default App;
