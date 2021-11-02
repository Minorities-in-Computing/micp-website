import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const styles = ({
  root: {
    display: 'flex',
    flexGrow: 1,
    backgroundImage: 'linear-gradient(180deg, antiquewhite, white)',
    overflowX: 'hidden',
  },
  img: {
    maxWidth: '60px',
    height: 'auto',
    marginRight: '12px'
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    textAlign: 'left',
    fontSize: '35px',
    color: '#000000',
    "&:hover": {
      color: "white",
      cursor: 'pointer'
    }
  },
  div: {
    opacity: '3.0',
    filter: 'brightness(70%)'
  },
  button: {
    opacity: '0.8',
    color: 'black',
    fontSize: '20px',
    marginRight: '10px',
  }

});

const Navbar = (props) => {
  const { classes } = props;
  return (
    <AppBar position="fixed" className={classes.root} elevation={0}>
        <Toolbar>
            <h1 className = {classes.title}>MiCP</h1>
            <Button style = {{color: 'black'}} className={classes.button} component={Link} to="/">Home</Button>
            <Button style = {{color: 'black'}} className={classes.button} component={Link} to="/about">About Us</Button>
            <Button style = {{color: 'black'}} className={classes.button} component={Link} to="/team">Team</Button>
        </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Navbar);