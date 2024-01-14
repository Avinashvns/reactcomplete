import { useContext } from "react";
import { multiStepContext } from "../../StepContext";
import { Table, TableBody, TableCell, TableContainer, TableRow, TableHead } from "@mui/material";


export default function DisplayData() {
    const { finalData } = useContext(multiStepContext);
    return (
        <>
            <h1>Display All Data from ContextApi</h1>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Contact</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>Property Name</TableCell>
                            <TableCell>Property Type</TableCell>
                            <TableCell>Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            finalData.map((data) => (
                                <TableRow key={data.firstname}>
                                    <TableCell>{data.firstname}</TableCell>
                                    <TableCell>{data.lastname}</TableCell>
                                    <TableCell>{data.contact}</TableCell>
                                    <TableCell>{data.location}</TableCell>
                                    <TableCell>{data.city}</TableCell>
                                    <TableCell>{data.state}</TableCell>
                                    <TableCell>{data.propertyname}</TableCell>
                                    <TableCell>{data.propertytype}</TableCell>
                                    <TableCell>{data.price}</TableCell>
                                </TableRow>

                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}