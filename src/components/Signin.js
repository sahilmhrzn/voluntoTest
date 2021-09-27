import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@mui/material/Typography';
//import Bottom from './Bottom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Signin = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log( email, password);
    handleClose();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
       <Typography variant="h4" style={{fontFamily:'Roboto',fontWeight:'bold'}}>
       Sign In
       </Typography>
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" style={{backgroundColor:"#03A61C",color:'white'}}>
          Signup
        </Button>
      </div>
    </form>
  );
};

export default Signin;