import { useEffect } from 'react';
import classes from './BackgroundLayout.module.css'

import Aos from 'aos';
import 'aos/dist/aos.css';

const BackgroundLayout = (props) => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return(
        <div className={classes.main} data-aos="fade" data-aos-duration="300">
            {props.children}
        </div>
    )
}

export default BackgroundLayout