import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Cards from './components/Cards';
import Events from './components/Events';
import Form from './components/Form';
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    //minHeight: '90vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/children1.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height:'83rem',
    backgroundAttachment: 'fixed'
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Cards />
      <Events />
      <Form />
      <Footer />
    </div>
  );
}
