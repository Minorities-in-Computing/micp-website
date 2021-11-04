import React, { Component } from 'react';
import prez from './images/prez.png';
import vp from './images/vp.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Grid from '@mui/material/Grid';
import events from './images/events.png';
import secretary from './images/secretary.png';
import tres from './images/treasurer.png';
import pr from './images/pr.png';

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
    componentDidMount(){
        // You can also pass an optional settings object
        // below listed default settings
        AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        });
    }
    render() {
        return(
            <div style = {{paddingTop: '5%', paddingLeft: '5%', paddingBottom: '5%'}}>
                <h1 data-aos = 'zoom-in' style = {{fontFamily: 'sans-serif', fontSize: '50px', textAlign: 'center', fontWeight: 'normal'}}>Meet the Board!</h1>
                <Grid container direction = 'row' spacing = {5}>
                    <Grid item xs = {4}>
                        <img width = '90%' data-aos = 'fade-up' src = {vp} alt = 'Vice President'/>
                    </Grid>
                    <Grid item xs = {4}>
                        <img width = '90%' data-aos = 'fade-up' src = {prez} alt = 'President'/>
                    </Grid>
                    <Grid item xs = {4}>
                        <img width = '90%' data-aos = 'fade-up' src = {tres} alt = 'Treasurer'/>
                    </Grid>
                    <Grid item xs = {4}>
                        <img width = '90%' data-aos = 'fade-up' src = {events} alt = 'Events Officer'/>
                    </Grid>
                    <Grid item xs = {4}>
                        <img width = '90%' data-aos = 'fade-up' src = {secretary} alt = 'Secretary'/>
                    </Grid>
                    <Grid item xs = {4}>
                        <img width = '90%' data-aos = 'fade-up' src = {pr} alt = 'Public Relations'/>
                    </Grid>
                </Grid>
            </div>
            
        );
        
    }
}

export default Home;