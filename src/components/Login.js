import React, { useState } from "react";
import { Box, Button, TextField, styled, Typography } from '@mui/material';
import data from "../database/users.json";
import { useNavigate } from "react-router-dom";


const Component = styled(Box)`
  width: 70vh;
  height: 50vh;
  background-color: #fff;
  margin: 140px auto;
  border-radius: 5px;
`
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 40px 50px;
  flex: 1;
  & > div, & > button {
    margin-top: 20px;
  }
`

const LoginButton = styled(Button)`
  text-transform: none;
  background: #FB6418;
  color: #fff;
  height: 48px;
  width: 360px;
  border-radius: 2px;
  font-size: 18px;
  margin-top: 20px;
`

const loginInitialValue = {
  username: "",
  password: ""
}

const Login = () => {
  const [userLogin, setUserLogin] = useState(loginInitialValue);

  const navigate = useNavigate();

  const onInputChange = (e)=>{
    setUserLogin({...userLogin,[e.target.name] : e.target.value});
    console.log(userLogin);
  }

  const loginUser = () =>{
    let searchUser = data.filter(
          item => item.username === userLogin.username && item.password === userLogin.password );
          // console.log(searchUser);
          if (searchUser.length > 0) {
            sessionStorage.setItem("user", userLogin.username );
            navigate('/home');
        } else {
            window.alert("Please enter correct Username/Password");
        }
        
  }
  return (
    <>
  <Component>
      <Wrapper>
          <Typography style={{textAlign: 'center', fontWeight: '600',fontSize: '25px'}}>Sign In</Typography>
          <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label="Enter Username"/>
          <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label="Enter Password"/>
          <LoginButton variant="contained" onClick={()=> loginUser()}>Login</LoginButton>
      </Wrapper>
    </Component>
      
    </>
  );
}

export default Login;