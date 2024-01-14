import { Box, Button, TextField } from "@mui/material";
import { multiStepContext } from "../../StepContext";
import { useContext } from "react";


export default function BasicDetails() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    return (
        <>
            <h1>Basic Details</h1>
            <Box>
                <TextField label="First Name" variant="outlined" value={userData['firstname']} color="secondary"
                    onChange={(e) => setUserData({ ...userData, "firstname": e.target.value })} />
            </Box>
            <Box>
                <TextField label="Last Name" variant="outlined" value={userData['lastname']} color="secondary"
                    onChange={(e) => setUserData({ ...userData, "lastname": e.target.value })} />
            </Box>
            <Box>
                <TextField label="Contact Number" variant="outlined" value={userData['contactno']} color="secondary"
                    onChange={(e) => setUserData({ ...userData, "contactno": e.target.value })} />
            </Box>

            <Box>
                <Button variant="contained" color="primary" onClick={() => setStep(2)}>Next</Button>
            </Box>
        </>
    );
}