import { Button } from '@mui/material'
import { cx } from '../../../Utils/classnames'
import classes from './CustomButton.module.css'

const CustomButton = (props) => {
    const { text, type = "filled", className, onClick } = props
    return(
        <Button className={cx(classes.main, type === "filled" ? classes.filled : classes.outlined)} onClick={onClick}>
            {text}
        </Button>
    )
}

export default CustomButton