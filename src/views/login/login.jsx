import React, {useState} from "react";
import {Button, Card, CardContent, Grid, Link, Typography} from "@mui/material";
import FormInput from "../../components/form_input/FormInput";

const Login = () => {

    const [email,setEmail] =useState('');
    const [isValidEmail , setIsValid] = useState(true)
    const [helperTextMail , setHelperText] = useState('Required');

    const handleEmailChange = e => {
        setEmail(e.target.value);
        let validation = validate()
        setIsValid(!validation[1])
        setHelperText(validation[0])
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    const validate= () => {
        let helperText = ''
        let valid = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z/.]{1,20})$/.test(email)
        if (!valid)
            helperText = "Email is not valid"


        return [helperText , valid]
    }


    return (
        <div className="login">
            <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                <Grid item xs={10} md={5} paddingTop={2}>
                    <Card sx={{ alignSelf : 'center' , boxShadow: 12}} variant={"outlined"}>
                        <CardContent>
                            <Typography variant="h4">
                                Log in
                            </Typography>
                            <Typography variant="subtitle1">
                                FuelQ Management System
                            </Typography>
                            <FormInput label="Email" name="Email" value={email}  onChange = {handleEmailChange} onBlur = {handleEmailChange} helperText = {helperTextMail} isValid={isValidEmail} />
                            <Button variant="contained" sx={{marginTop : 2 , marginBottom : 2}} fullWidth onClick={handleSubmit} >PROCEED</Button>
                            <Link sx={{textDecoration: 'none'}} href="/register-user">Register</Link>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;
