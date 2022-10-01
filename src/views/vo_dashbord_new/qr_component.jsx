import React from "react";
import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const QRComponent = () => {
    return(
        <Card
            sx={{
                alignSelf : 'center' ,
                borderRadius : 5 ,
                maxHeight : {xs:'none' , lg:'430px'}
            }}
            variant={"outlined"}
        >
            <CardMedia
                component="img"
                image="img/QR_sample.png"
                sx={{
                    paddingLeft : {xs:'10%' , lg:'25%'} ,
                    paddingRight : {xs:'10%' , lg:'25%'}
                }}
            />
            <CardContent sx={{backgroundColor :'#e7e7e7' }}>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={6}>
                        <Typography variant='h6' align='center' color='#2e7d32'>
                            Remaining Petrol Quota
                        </Typography>
                        <Typography variant='h4' align='center' fontWeight='bold' >
                            12.5L
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant='h6' align='center' color='#2e7d32'>
                            Remaining Diesel Quota
                        </Typography>
                        <Typography variant='h4' align='center' fontWeight='bold' >
                            12.5L
                        </Typography>
                    </Grid>


                </Grid>
            </CardContent>
        </Card>
    )
}

export default QRComponent;