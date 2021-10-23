import classes from './Burger.module.css'
import { Button, Drawer, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { setCurrentLanguage } from '../../../Redux/commonReducer';
import { connect } from 'react-redux';

const Burger = (props) => {
    const { refs } = props

    const { t, i18n } = useTranslation()

    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language)
        props.setCurrentLanguage(language)
    }

    const anchor = 'right'

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleScroll = (index) => {
        setTimeout(function(){handleOpen()}, 800)
        refs[index].current.scrollIntoView()
    }

    return(
        <div className={classes.main}>
            <div className={classes.burger}>
                <IconButton  onClick={handleOpen}>
                    <MenuIcon/>
                </IconButton>
            </div>
            <Drawer anchor={anchor} open={isOpen} onClose={handleOpen} className={classes.body} classes={{ paper: classes.body }}>
                <IconButton onClick={handleOpen} className={classes.closeBut}>
                    <CloseIcon/>
                </IconButton>
                <div className={classes.menuItems}>
                    <button onClick={() => handleScroll(0)}>{t("navbar.one")}</button>
                    <button onClick={() => handleScroll(1)}>{t("navbar.two")}</button>
                    <button onClick={() => handleScroll(2)}>{t("navbar.three")}</button>
                    <button onClick={() => handleScroll(3)}>{t("navbar.four")}</button>
                </div>
                <div className={classes.footer}>
                    <Button onClick={() => handleChangeLanguage("ru")} className={props.currentLanguage === "ru" ? classes.activeLang : undefined}>RU</Button>
                    <Button onClick={() => handleChangeLanguage("ua")} className={props.currentLanguage === "ua" ? classes.activeLang : undefined}>UA</Button>
                </div>
            </Drawer>
        </div>
    )
}

let mapStateToProps = (state) => ({
    currentLanguage: state.common.currentLanguage
})

export default connect(mapStateToProps, {
    setCurrentLanguage
})(Burger)