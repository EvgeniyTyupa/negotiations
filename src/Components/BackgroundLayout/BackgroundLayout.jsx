import classes from './BackgroundLayout.module.css'

const BackgroundLayout = (props) => {
    return(
        <div className={classes.main}>
            {props.children}
        </div>
    )
}

export default BackgroundLayout