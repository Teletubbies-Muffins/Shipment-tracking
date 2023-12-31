import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// const steps = [
//     {
//         label: 'Select campaign settings',
//         description: `For each ad campaign that you create, you can control how much
//               you're willing to spend on clicks and conversions, which networks
//               and geographical locations you want your ads to show on, and more.`,
//     },
//     {
//         label: 'Create an ad group',
//         description:
//             'An ad group contains one or more ads which target a shared set of keywords.',
//     },
//     {
//         label: 'Create an ad',
//         description: `Try out different ad text to see what brings in the most customers,
//               and learn how to enhance your ads using features like ad extensions.
//               If you run into any problems with your ads, find out how to tell if
//               they're running and how to resolve approval issues.`,
//     },
// ];

export default function VerticalLinearStepper({ steps }) {
    const [activeStep, setActiveStep] = React.useState(0);
    const Steps = ([...steps]).reverse()
    // console.log(Steps)

    // console.log(steps)
    // if (props.steps.length()) {
    // setSteps([{ label: "Pending", description: "your shipment still not shipped" },{ label: "Pending", description: "your shipment still not shipped" }])
    // }
    return (
        <Box sx={{ minWidth: 400, maxWidth: 300 }}>
            <Stepper activeStep={activeStep} orientation="vertical" >
                {Steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index === 2 ? (
                                    <Typography variant="caption"></Typography>
                                ) : null
                            }
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Typography>{step.description}</Typography>
                            <Box sx={{ mb: 2 }}>

                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}