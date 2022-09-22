import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


export default function LinearWithValueLabel() {

  return (
    <Box sx={{ flexGrow: 1, p: 5}}>
      <Typography mt={2} variant="h6" gutterBottom>
        Petrol
      </Typography>
      <BorderLinearProgress variant="determinate" value={50} />
      <Typography mt={2} variant="h6" gutterBottom>
        Diesel
      </Typography>
      <BorderLinearProgress variant="determinate" value={80} />
    </Box>
  );
}
