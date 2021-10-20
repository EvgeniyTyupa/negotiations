import { connect } from 'react-redux'
import classes from './Main.module.css'
import Container from '../Components/UI/Container/Container'
import { useTranslation } from 'react-i18next'
import CustomButton from '../Components/UI/Button/CustomButton'

import time_icon from '../Assets/icon6.png'
import file_icon from '../Assets/icon7.png'
import play_icon from '../Assets/icon8.png'
import micro from '../Assets/micro.jpg'
import chess1 from '../Assets/imgset1.jpg'
import chess2 from '../Assets/imgset2.jpg'
import chess3 from '../Assets/imgset3.jpg'

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
                            <span>+ {t("home.pluwki.two1")}<br/>{t("home.pluwki.two2")}<br/>{t("home.pluwki.two3")}</span>
                        </div>
                        <div className={classes.pluwka}>
                            <div className={classes.pluwkaImgContainer}>
                                <img src={play_icon} alt="play"/>
                            </div>
                            <span>+ {t("home.pluwki.three1")}<br/>{t("home.pluwki.three2")}<br/>{t("home.pluwki.three3")}</span>
                        </div>
                    </div>
                    <div className={classes.buttons}>
                        <CustomButton text={t("actions.register")}/>
                        <CustomButton text={t("actions.pay")} type="outlined"/>
                    </div>
                </Container>
            </div>
            <div className={classes.polezno}>
                <Container className={classes.poleznoContainer}>
                    <div className={classes.poleznoInfo}>
                        <h3>
                            {t("polezno.title1")}
                            <br/>
                            <br/>{t("polezno.title2")}
                            <br/>
                            <br/>{t("polezno.title3")}
                            <br/>
                            <br/>{t("polezno.title4")}
                            <br/>
                            <br/>{t("polezno.title5")}
                            <br/>
                            <br/>{t("polezno.title6")}
                        </h3>
                    </div>
                    <img src={micro} alt="micro"/>
                </Container>
            </div>
            <div className={classes.chess}>
                <Container className={classes.chessContainer}>
                    <img src={chess1} alt="chess"/>
                    <img src={chess2} alt="chess"/>
                    <img src={chess3} alt="chess"/>
                </Container>
            </div>
            <div className={classes.download}>
                <h1>{t("download.one")}</h1>
                <h1>{t("download.two")}</h1>
                <h1>{t("download.three")}</h1>
                <a href="howto.pdf" download>{t("actions.download")}</a>
            </div>
            <div className={classes.program}>
                <Container className={classes.programContainer}>
                    <h2>{t("program.title")}</h2>
                    <div className={classes.shedule}>
                        <div className={classes.sides}>
                            <div className={classes.side}>
                                <div className={classes.point}>
                                    <h4>{t("program.one.title")}</h4>
                                    <p>{t("program.one.sub")}</p>
                                    <ul>
                                        <li>{t("program.one.one")}</li>
                                        <li>{t("program.one.two")}</li>
                                        <li>{t("program.one.three")}</li>
                                        <li>{t("program.one.four")}</li>
                                        <li>{t("program.one.practic")}</li>
                                    </ul>
                                </div>
                                <div className={classes.point}>
                                    <h4>{t("program.two.title")}</h4>
                                    <p>{t("program.two.sub")}</p>
                                    <ul>
                                        <li>{t("program.two.one")}</li>
                                        <li>{t("program.two.two")}</li>
                                        <li>{t("program.two.three")}</li>
                                        <li>{t("program.two.four")}</li>
                                        <li>{t("program.two.five")}</li>
                                        <li>{t("program.two.practic")}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={classes.side}>
                                <div className={classes.point}>
                                    <h4>{t("program.three.title")}</h4>
                                    <p>{t("program.three.sub")}</p>
                                    <ul>
                                        <li>{t("program.three.one")}</li>
                                        <li>{t("program.three.two")}</li>
                                        <li>{t("program.three.three")}</li>
                                        <li>{t("program.three.four")}</li>
                                        <li>{t("program.three.practic")}</li>
                                    </ul>
                                </div>
                                <div className={classes.point}>
                                    <h4>{t("program.four.title")}</h4>
                                    <p>{t("program.four.sub")}</p>
                                    <ul>
                                        <li>{t("program.four.one")}</li>
                                        <li>{t("program.four.two")}</li>
                                        <li>{t("program.four.three")}</li>
                                        <li>{t("program.four.four")}</li>
                                        <li>{t("program.four.practic")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={classes.final}>
                            <h4>{t("program.five.title")}</h4>
                            <p>{t("program.five.sub")}</p>
                            <span>{t("program.five.one")}</span>
                        </div>
                    </div>
                    <div className={classes.progBut}>
                        <CustomButton text={t("actions.register")}/>
                    </div>
                </Container>
            </div>
            
        </div>
    )
}

export default connect()(Main)