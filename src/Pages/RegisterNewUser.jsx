import React, { useState } from 'react';
import {

  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { Button } from '@chakra-ui/react';


function RegisterNewUser() {
  let userData = JSON.parse(localStorage.getItem("dieselUserData")) || [];
  const [name, setNmae] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  // console.log(name);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' && email === '' && password === '' && rePassword === '') {
     alert('Fill All The Required Fill')
     
    }
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].email === email) {
        //alert("Email Number Is Already Register");
       
       // return;
      }


    }
    const data = {
      name: name,
      email: email,
      password: password
    }
    if (password !== rePassword) {
      alert('Enter valid Password')
      return  
    }
    else {
      userData.push(data);
      localStorage.setItem('dieselUserData', JSON.stringify(userData))
    }
    setNmae('');
    setEmail('');
    setPassword('');
    setRePassword('');
  }
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg' />
                <MDBInput label='Your Name' value={name} name='name' onChange={(e) => setNmae(e.target.value)} id='form1' type='text' className='w-100' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg' />
                <MDBInput label='Your Email' value={email} name="email" onChange={(e) => setEmail(e.target.value)} id='form2' type='email' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg' />
                <MDBInput label='Password' value={password} name="password" onChange={(e) => setPassword(e.target.value)} id='form3' type='password' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg' />
                <MDBInput label='Repeat your password' id='form4' type='password' value={rePassword} name="rePassword" onChange={(e) => setRePassword(e.target.value)} />
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <Button colorScheme='blue' onClick={handleSubmit}>Register</Button>
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default RegisterNewUser;