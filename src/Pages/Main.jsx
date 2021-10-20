import { connect } from 'react-redux'
import classes from './Main.module.css'
import Container from '../Components/UI/Container/Container'
import { useTranslation } from 'react-i18next'

import time_icon from '../Assets/icon6.png'
import file_icon from '../Assets/icon7.png'
import play_icon from '../Assets/icon8.png'

const Main = (props) => {
    const { t } = useTranslation()

    return(
        <div className={classes.main}>
            <div className={classes.home}>
                <Container className={classes.homeContainer}>
                    <div className={classes.homeHeader}>
                        <h1>{t("home.titleOne")}&nbsp;</h1>
                        <h1>{t("home.titleTwo")}</h1>
                        <div className={classes.redBall}/>
                    </div>
                    <div className={classes.homeSub}>
                        <p>{t("home.sub")}</p>
                    </div>
                    <div className={classes.dates}>
                        <div className={classes.datesOne}>
                            <div className={classes.quadro}/>
                            <p>{t("home.dates")}</p>
                        </div>
                        <p>{t("home.shedule")}</p>
                    </div>
                    <div className={classes.pluwki}>
                        <div className={classes.pluwka}>
                            <div className={classes.pluwkaImgContainer}>
                                <img src={time_icon} alt="time"/>
                            </div>
                            <span>{t("home.pluwki.one1")}<br/>{t("home.pluwki.one2")}</span>
                        </div>
                        <div className={classes.pluwka}>
                            <div className={classes.pluwkaImgContainer}>
                                <img src={file_icon} alt="file"/>
                            </div>
                            <span>+ <br/>{t("home.pluwki.two1")}<br/>{t("home.pluwki.two2")}</span>
                        </div>
                        <div className={classes.pluwka}>
                            <div className={classes.pluwkaImgContainer}>
                                <img src={play_icon} alt="play"/>
                            </div>
                            <span>+ {t("home.pluwki.three1")}<br/>{t("home.pluwki.three2")}</span>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default connect()(Main)