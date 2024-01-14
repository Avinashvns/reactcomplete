import { Box, Button, TextField } from "@mui/material";
import { useContext } from "react";
import { multiStepContext } from "../../StepContext";

export default function PropertyDetails() {
    const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);
    return (
        <>
            <h1>Property Details</h1>
            <Box>
                <TextField label="Property Name" variant="outlined" value={userData['propertyname']} color="secondary"
                    onChange={(e) => setUserData({ ...userData, "propertyname": e.target.value })} />
            </Box>
            <Box>
                <TextField label="Property type" variant="outlined" value={userData['propertytype']} color="secondary"
                    onChange={(e) => setUserData({ ...userData, "propertytype": e.target.value })} />
            </Box>
            <Box>
                <TextField label="Price" variant="outlined" value={userData['price']} color="secondary"
                    onChange={(e) => setUserData({ ...userData, "price": e.target.value })} />
            </Box>

            <Box>
                <Button variant="contained" color="secondary" onClick={() => setStep(2)}>Back</Button>
                <span> </span>
                <Button variant="contained" color="primary" onClick={submitData}>Submit</Button>
            </Box>
        </>
    );
}