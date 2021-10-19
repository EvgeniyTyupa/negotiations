import classes from './Preloader.module.css'
import preloader from '../../Assets/preloader.svg'
import BackgroundLayout from '../BackgroundLayout/BackgroundLayout'

const Preloader = (props) => {
    return(
        <BackgroundLayout>
            <img src={preloader} alt="preloader" className={classes.main}/>
        </BackgroundLayout>
    )
}

export default Preloader