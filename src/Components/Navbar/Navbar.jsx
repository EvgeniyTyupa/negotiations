import Container from '../UI/Container/Container'
import classes from './Navbar.module.css'
import { useTranslation } from 'react-i18next'
import { MenuItem, TextField } from '@mui/material'
import { connect } from 'react-redux'
import { setCurrentLanguage } from '../../Redux/commonReducer'

const Navbar = (props) => {
    const { t, i18n } = useTranslation()

    const handleLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
        props.setCurrentLanguage(event.target.value)
    }

    return(
        <div className={classes.main}>
            <Container className={classes.container}>
                <button>{t("navbar.one")}</button>
                <button>{t("navbar.two")}</button>
                <button>{t("navbar.three")}</button>
                <button>{t("navbar.four")}</button>
                <TextField select defaultValue="ru" onChange={handleLanguage} variant="outlined">
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