/*import React from 'react';
import { Container,Box,Typography,TextField,Button, Alert } from '@mui/material';
import {CircularProgress} from '@mui/material';


import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { firebaseAuth } from '../firebase';



 class Forgotpass extends React.Component {

 	constructor(props) {
 		super(props)
 	
 		this.state = {
 			 email:"",
             buttontext:"Send link",
             showtext:false,
			 email_error:null,
			 open:false
 		}
 	}

 	handleChange = (e) =>{
		this.setState({
			[e.target.name]:e.target.value,
			email_error:null,
			showtext:false
		})
	}

	 handleClose = (event, reason) => {
		if (reason === 'clickaway') {
		  return;
		}
		this.setState({
			open:false
		})
	  };

 	formSubmitted = () =>{
 		let validData=true;
 		this.state.email_error=null;
 		
 		if (this.state.email==="") {
 			this.state.email_error="Requried!";
 			validData=false;
 		}

 		this.setState({
 			update:true
 		})

 		if (validData) {

 			this.state.buttontext="sending...";
 			
			var emailAddress = this.state.email;

			firebaseAuth
			.sendPasswordResetEmail(emailAddress)
			.then((user) =>{
				console.log(user);
				this.setState({
					showtext:true,
					buttontext:"Send link",
					open:true
				})

			}).catch((error) =>{
			  console.log(error)

				this.setState({
					email_error:null,
					buttontext:"Send link"
				})
			  if (error.code==="auth/user-not-found") {
			  	this.setState({email_error:"User not Found"})
			  }
			  if (error.code==="auth/invalid-email") {
			  	this.setState({email_error:"Invalid Email"})
			  }


			});
 		}
 	}


	render() {
		return (
			<Container 
			maxWidth="xs"
			style={{
			textAlign:"center",
			marginTop:"40px"}} >
			<Box 
			style={{
		    background:"white"}}
			boxShadow="2" 
			borderRadius="10px" 
			padding="20px">
			
			<Typography 
			variant="h4" 
			color="primary">
			Password Recovery
			</Typography>
			<br/>
			<br/>

			<TextField
	          label="Email"
	          fullWidth
	          error={this.state.email_error!=null}
	          helperText={this.state.email_error}
	          type="email"
	          onChange={this.handleChange}
	          name="email"
	          variant="outlined"
	          size="small"
	          />
	          <br/>

	          <br/>
	          <br/>

	          <Button 
	          fullWidth
	          variant="contained" 
	          color="primary"
	          onClick={this.formSubmitted}>
              {this.state.buttontext}
              </Button>
              {
                this.state.showtext &&
              <Typography>
                <br/>
                {this.state.open && "Go to your mail and change the password"}
              </Typography>
              }
			</Box>
			<br/><br/><br/>
			<br/><br/><br/>
			<br/><br/>
			
			<Snackbar open={this.state.open} autoHideDuration={6000} onClose={()=>{
				this.setState({open:false})
			}}>
  <Alert onClose={()=>{
	this.setState({
		open:false
	})
  }} severity="success" sx={{ width: '100%' }}>
    Email sent 
  </Alert>
</Snackbar>
			</Container>
		)
	}
}

export default Forgotpass;*/