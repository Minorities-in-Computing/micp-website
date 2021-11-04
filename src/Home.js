import React, { Component } from 'react';
import logo from './images/logo.png';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AOS from './DataAOS';
import TextField from '@mui/material/TextField';
const styles = ({
    img: {
        width: '100%',
        opacity: '0.84',
    },
    imageText: {
        position: 'absolute',
        top: '10%',
        left: '2%',
        color: 'rgb(96,94,94)',
        fontWeight: 'normal',
        fontSize: '50px',
        textAlign: 'left', fontFamily: [
            'PT Sans',
            'sans-serif',
        ].join(',')
    }
})

class Home extends Component {
    constructor (props){
        super(props)
        this.state = {
            open: false
        }
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }
    render() {
        return(
            <div style = {{paddingTop: '5%'}}>
                <Grid container spacing = {3}>
                    <Grid items xs = {6} style = {{paddingLeft: '10%'}}>
                        <img data-aos = 'fade-up' src = {logo} alt = 'MICP logo'/>
                    </Grid>
                    <Grid data-aos = 'fade-down' items xs = {6} style = {{paddingTop: '5%', paddingRight: '10%'}}>
                        <h1 style = {{fontFamily: 'sans-serif', fontSize: '50px', textAlign: 'center'}}>Minorities in Computing</h1>
                        <h1 style = {{fontFamily: 'sans-serif', fontSize: '30px', textAlign: 'center'}}>George Mason University</h1>
                        <h4 style = {{fontFamily: 'sans-serif', fontSize: '20px', textAlign: 'center', fontWeight: 'normal'}}>
                            Dedicated to creating a conducive environment for minority students in the 
                            Department to succeed and thrive in their academic endeavors
                        </h4>
                    </Grid>
                </Grid>
                <Button style = {{left: '65%'}}
                    href = 'https://docs.google.com/document/d/1z4OCUyh_MrxiVRa5R3ugU1OvgIfYrDr-/edit?usp=sharing&ouid=114499817865975683376&rtpof=true&sd=true'
                    variant="contained">
                    View our constituion
                </Button>
                <Button style = {{left: '5%'}}
                    variant="contained" onClick = {this.handleClickOpen}>
                        Contact Us
                </Button>

                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Contact Us</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Please enter your name, email, and other information in the following fields.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="info"
                        label="Notes"
                        fullWidth
                        variant="standard"
                        multiline
                        minRows = {4}
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose}>Cancel</Button>
                    <Button onClick={this.handleClose}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </div>
            
        );
        
    }
}

export default Home;