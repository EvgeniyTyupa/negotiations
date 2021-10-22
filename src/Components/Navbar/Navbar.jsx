import Container from '../UI/Container/Container'
import classes from './Navbar.module.css'
import { useTranslation } from 'react-i18next'
import { MenuItem, TextField } from '@mui/material'
import { connect } from 'react-redux'
import { setCurrentLanguage } from '../../Redux/commonReducer'
import { makeStyles } from '@mui/styles'

const useSelectStyles = makeStyles({
    root: {
        color: "#212529",
        outline: "none",
        '& .MuiOutlinedInput-notchedOutline': {
            border: "none"
        },
        '& .MuiOutlinedInput-input': {
            paddingTop: 0,
            border: "none",
            outline: "none",
        },
        '& .MuiInputBase-root': {
            color: '#212529',
            fontSize: "19px",
            fontWeight: 300,
            fontFamily: 'Helvetica',
            paddingTop: 0,
            border: "none",
            outline: "none",
        },
        '& .MuiInput-underline:before':{
            borderBottom: 0,
            border: "none",
            outline: "none",
        },
        '& .MuiInput-underline:after':{
            borderBottom: "none",
            border: "none",
            outline: "none",
        },
        '& .MuiSelect-select': {
            paddingBottom: 0,
            color: '#212529',
            border: "none",
            outline: "none",
            fontSize: "14px"
        },
        '& .MuiSelect-selectMenu': {
            minHeight: 0,
            border: "none",
            outline: "none",
        },
        '& .MuiSelect-icon': {
            color: '#212529',
            border: "none",
            outline: "none",
        }
    }
})

const Navbar = (props) => {
    const { handleScroll } = props

    const material = useSelectStyles()

    const { t, i18n } = useTranslation()

    const handleLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
        props.setCurrentLanguage(event.target.value)
    }

    return(
        <div className={classes.main}>
            <Container className={classes.container}>
                <button onClick={() => handleScroll(0)}>{t("navbar.one")}</button>
                <button onClick={() => handleScroll(1)}>{t("navbar.two")}</button>
                <button onClick={() => handleScroll(2)}>{t("navbar.three")}</button>
                <button onClick={() => handleScroll(3)}>{t("navbar.four")}</button>
                <TextField select defaultValue="ru" classes={material} onChange={handleLanguage} variant="outlined">
                    <MenuItem value="ru">RU</MenuItem>
                    <MenuItem value="ua">UA</MenuItem>
                </TextField>
            </Container>
        </div>
    )
}

let mapStateToProps = (state) => ({
    currentLanguage: state.common.currentLanguage
})

export default connect(mapStateToProps, {
    setCurrentLanguage
})(Navbar)