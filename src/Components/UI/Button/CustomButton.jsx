import { Button } from '@mui/material'
import classes from './CustomButton.module.css'

const CustomButton = (props) => {
    const { text, type = "filled", className, onClick } = props
    return(
        <Button>
            {text}
        </Button>
    )
}

export default CustomButton