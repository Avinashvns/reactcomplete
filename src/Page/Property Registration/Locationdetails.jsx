import { Box, Button, TextField } from "@mui/material";
import { useContext } from "react";
import { multiStepContext } from "../../StepContext";

export default function LocationDetails() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    return (
        <>
            <h1>Location Details</h1>
            <Box>
                <TextField label="Location" variant="outlined" value={userData['location']} color="secondary"
                    onChange={(e) => setUserData({ ...userData, "location": e.target.value })} />
            </Box>
            <Box>
                <TextField label="City" variant="outlined" value={userData['city']} color="secondary"
                    onChange={(e) => setUserData({ ...userData, "city": e.target.value })} />
            </Box>
            <Box>
                <TextField label="State" variant="outlined" value={userData['state']} color="secondary"
                    onChange={(e) => setUserData({ ...userData, "state": e.target.value })} />
            </Box>

            <Box>
                <Button variant="contained" color="secondary" onClick={() => setStep(1)}>Back</Button>
                <span> </span>
                <Button variant="contained" color="primary" onClick={() => setStep(3)}>Next</Button>
            </Box>

        </>
    );
}