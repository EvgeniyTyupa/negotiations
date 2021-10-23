import { connect } from 'react-redux'
import classes from './Main.module.css'
import Container from '../Components/UI/Container/Container'
import { useTranslation } from 'react-i18next'
import CustomButton from '../Components/UI/Button/CustomButton'
import SliderCustom from '../Components/Slider/Slider'
import { cx } from '../Utils/classnames'

import SubscribeForm from '../Components/SubscribeForm/SubscribeForm'
import { useEffect, useRef, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Register from '../Components/Register/Register'
import { setCurrentLanguage } from '../Redux/commonReducer'
import { useHistory, useLocation } from 'react-router'
import Preloader from '../Components/Preloader/Preloader'
import Thankyou from '../Components/Thankyou/Thankyou'

import time_icon from '../Assets/icon6.png'
import file_icon from '../Assets/icon7.png'
import play_icon from '../Assets/icon8.png'
import micro from '../Assets/micro.jpg'
import chess1 from '../Assets/imgset1.jpg'
import chess2 from '../Assets/imgset2.jpg'
import chess3 from '../Assets/imgset3.jpg'
import speaker from '../Assets/spiker.jpg'
import value1 from '../Assets/icon1.png'
import value2 from '../Assets/icon2.png'
import value3 from '../Assets/icon3.png'
import value4 from '../Assets/icon4.png'
import value5 from '../Assets/icon5.png'
import price from '../Assets/price3.png'
import square from '../Assets/frame.svg'
import inst from '../Assets/inst.png'
import fb from '../Assets/fb.png'
import globe from '../Assets/globe.png'
import telegram from '../Assets/telegram.png'

import Aos from 'aos';
import 'aos/dist/aos.css';

const Main = (props) => {
    const { t, i18n } = useTranslation()

    const search = useLocation().search
    const lang = new URLSearchParams(search).get('lang')

    const history = useHistory()

    const [isOpenRegister, setIsOpenRegister] = useState(false)
    const [isOpenThankyou, setIsOpenThankyou] = useState(false)
    const [actionType, setActionType] = useState(null)

    const [userURL, setUserURL] = useState(null)

    const handleRegister = () => {
        setActionType("register")
        setIsOpenRegister(!isOpenRegister)
    }

    const handleRegisterConsultation = () => {
        setActionType("consultation")
        setIsOpenRegister(!isOpenRegister)
    }

    const handleRegisterTraining = () => {
        setActionType("training")
        setIsOpenRegister(!isOpenRegister)
    }

    const closeRegister = () => {
        setIsOpenRegister(false)
        setActionType(null)
    }

    const handleThankyou = () => {
        setIsOpenThankyou(!isOpenThankyou)
    }

    const aboutRef = useRef()
    const programRef = useRef()
    const forWhoRef = useRef()
    const priceRef = useRef()

    const handleScroll = (index) => {
        refs[index].current.scrollIntoView()
    }

    const scrollToPay = () => {
        priceRef.current.scrollIntoView()
    }

    const refs = [aboutRef, programRef, forWhoRef, priceRef]

    useEffect(() => {
        setUserURL(window.location.href)
    }, [])

    console.log(userURL)

    useEffect(() => {
        if(lang === "ru" || lang === "ua"){
            i18n.changeLanguage(lang)
            props.setCurrentLanguage(lang)
        }
    }, [])

    useEffect(() => {
        if(window.location.pathname === "/thankyou"){
            setIsOpenThankyou(true)
        }
    }, [window.location.pathname])

    useEffect(() => {
        if(props.isSuccess){
            setIsOpenRegister(false)
            history.push('/thankyou')
        }
    }, [props.isSuccess])

    useEffect(() => {
        history.push(history.location.pathname + `?lang=${props.currentLanguage}`)
    }, [props.currentLanguage])

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return(
        <div className={classes.main}>
            {props.isFetching && <Preloader/>}
            <Navbar handleScroll={handleScroll} refs={refs} lang={lang}/>
            {isOpenRegister && <Register onClose={closeRegister} actionType={actionType} userURL={userURL}/>}
            {isOpenThankyou && <Thankyou onClick={handleThankyou}/>}
            {/* HOME */}
            <div className={classes.home}>
                <Container className={classes.homeContainer}>
                    <div className={classes.homeHeader}>
                        <h1 data-aos="fade-left" data-aos-delay="700" data-aos-duration="1500">{t("home.titleOne")}&nbsp;</h1>
                        <div data-aos="fade-down" data-aos-delay="1400" data-aos-duration="1500" className={classes.titleContainer}>
                            <h1 className={props.currentLanguage === "ua" ? classes.titleUA : undefined}>{t("home.titleTwo")}</h1>
                        </div>
                        <div data-aos="fade" data-aos-delay="300" data-aos-duration="1500" className={classes.redBall}/>
                    </div>
                    <div className={classes.homeSub} data-aos="fade" data-aos-delay="2100" data-aos-duration="1500">
                        <p>{t("home.sub")}</p>
                        <p>{t("home.subName")}</p>
                    </div>
                    <div className={classes.dates} data-aos="fade-up" data-aos-delay="2800" data-aos-duration="1500">
                        <div className={classes.datesOne}>
                            <div className={classes.quadro}/>
                            <p>{t("home.dates")}</p>
                        </div>
                        <p>{t("home.shedule")}</p>
                    </div>
                    <div className={classes.pluwki}  data-aos="fade-up" data-aos-delay="2800" data-aos-duration="1500">
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
                    <div className={classes.buttons} data-aos="fade-up" data-aos-duration="1500">
                        <CustomButton text={t("actions.register")} onClick={handleRegister}/>
                        <CustomButton text={t("actions.pay")} onClick={scrollToPay} type="outlined"/>
                    </div>
                </Container>
            </div>
            {/* POLEZNO */}
            <div className={classes.polezno} ref={aboutRef}>
                <Container className={classes.poleznoContainer}>
                    <div className={classes.poleznoInfo}>
                        <h3 data-aos="fade-left" data-aos-duration="1500">
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
            {/* CHESS */}
            <div className={classes.chess}>
                <Container className={classes.chessContainer}>
                    <img src={chess1} alt="chess"/>
                    <img src={chess2} alt="chess"/>
                    <img src={chess3} alt="chess"/>
                </Container>
            </div>
            {/* DOWNLOAD */}
            <div className={classes.download}>
                <h1>{t("download.one")}</h1>
                <h1>{t("download.two")}</h1>
                <h1>{t("download.three")}</h1>
                <a href="howto.pdf" download data-aos="zoom-in" data-aos-duration="500">{t("actions.download")}</a>
            </div>
            {/* PROGRAM */}
            <div className={classes.program} ref={programRef}  data-aos="fade-up" data-aos-duration="1500">
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
                                    </ul>
                                    <span>{t("program.one.practic")}</span>
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
                                    </ul>
                                    <span>{t("program.two.practic")}</span>
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
                                    </ul>
                                    <span>{t("program.three.practic")}</span>
                                </div>
                                <div className={classes.point}>
                                    <h4>{t("program.four.title")}</h4>
                                    <p>{t("program.four.sub")}</p>
                                    <ul>
                                        <li>{t("program.four.one")}</li>
                                        <li>{t("program.four.two")}</li>
                                        <li>{t("program.four.three")}</li>
                                        <li>{t("program.four.four")}</li>
                                    </ul>
                                    <span>{t("program.four.practic")}</span>
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
                        <CustomButton text={t("actions.register")} onClick={handleRegister}/>
                    </div>
                </Container>
            </div>
            {/* SPEAKER */}
            <div className={classes.speaker} data-aos="fade" data-aos-duration="1500">
                <Container className={classes.speakerContainer}>
                    <div className={classes.speakerImageContainer}>
                        <label className={classes.speakerTitle}>{t("speaker.title")}</label>
                        <img src={speaker} alt="speaker"/>
                        <label className={classes.speakerName}>{t("speaker.name")}</label>
                    </div>
                    <div className={classes.speakerAbout}>
                        <p>{t("speaker.one")}</p>
                        <p>{t("speaker.two")}</p>
                        <p>{t("speaker.three")}</p>
                        <p>{t("speaker.four")}</p>
                    </div>
                </Container>
            </div>
            {/* VALUES */}
            <div className={classes.values} ref={forWhoRef} data-aos="fade-up" data-aos-duration="1500">
                <Container className={classes.valuesContainer}>
                    <h2>{t("value.title")}</h2>
                    <div className={classes.value}>
                        <img src={value1} alt="case"/>
                        <span>{t("value.one")}</span>
                    </div>
                    <div className={classes.value}>
                        <img src={value2} alt="theory"/>
                        <span>{t("value.two")}</span>
                    </div>
                    <div className={classes.value}>
                        <img src={value3} alt="people"/>
                        <span>{t("value.three")}</span>
                    </div>
                    <div className={classes.value}>
                        <img src={value4} alt="fly"/>
                        <span>{t("value.four")}</span>
                    </div>
                    <div className={classes.value}>
                        <img src={value5} alt="like"/>
                        <span>{t("value.five")}</span>
                    </div>
                    <div className={classes.valueBut}>
                        <CustomButton text={t("actions.register")} onClick={handleRegister}/>
                    </div>
                </Container>
            </div>
            {/* PRICE */}
            <div className={classes.price} ref={priceRef} data-aos="fade-up" data-aos-duration="1500">
                <Container className={classes.priceContainer}>
                    <h2>{t("price.title")}</h2>
                    <div className={classes.priceBlock}>
                        <h4>999 грн / 38$</h4>
                        <img src={price} alt="price_img"/>
                        <a href="https://secure.wayforpay.com/button/ba3d46ec9259e" target="_blank" rel="noreferrer nofollow">
                            {t("actions.pay2")}
                        </a>
                    </div>
                    <div className={classes.pricePluwki}>
                        <h4>{t("price.whatTitle")}</h4>
                        <ul>
                            <li>{t("price.one.one")}</li>
                            <li>{t("price.one.two")}</li>
                            <li>{t("price.one.three")}</li>
                            <li>{t("price.one.four")}</li>
                            <li>{t("price.one.five")}</li>
                            <li>{t("price.one.six")}</li>
                        </ul>
                    </div>
                    <div className={classes.priceBlock}>
                        <h4>1999 грн / 76$</h4>
                        <img src={price} alt="price_img"/>
                        <a href="https://secure.wayforpay.com/button/b669f6a8cb15d" target="_blank" rel="noreferrer nofollow">
                            {t("actions.pay2")}
                        </a>
                    </div>
                    <div className={classes.pricePluwki}>
                        <h4>{t("price.whatTitle")}</h4>
                        <ul>
                            <li>{t("price.two.one")}</li>
                            <li>{t("price.two.two")}</li>
                            <li>{t("price.two.three")}</li>
                        </ul>
                    </div>
                </Container>
            </div>
            {/* ALERT */}
            <div className={classes.alert}>
                <h2 data-aos="zoom-in" data-aos-duration="1500">{t("alert")}</h2>
            </div>
            <div className={classes.afterAlertBut} data-aos="fade-up" data-aos-duration="1500">
                <CustomButton text={t("actions.register")} onClick={handleRegister}/>
            </div>
            {/* BONUS */}
            <div className={classes.bonuses}>
                <Container className={classes.bonusesContainer}>
                    <div className={classes.bonus} data-aos="fade-up" data-aos-duration="1500">
                        <div className={cx(classes.bonusMain, classes.bonus1Main)}>
                            <h2>БОНУС №1:</h2>
                            <p>{t("bonus.one")}</p>
                           
                        </div>
                    </div>
                    <div className={classes.bonus} data-aos="fade-up" data-aos-duration="1500">
                        <div className={cx(classes.bonusMain, classes.bonus2Main)}>
                            <h2>БОНУС №2:</h2>
                            <p>{t("bonus.two")}</p>
                        </div>
                    </div>
                </Container>
            </div>
            {/* COMMENTS */}
            <div className={classes.comments}>
                <h2>{t("comments.title")}</h2>
                <Container className={classes.commentsContainer}>
                    <div className={classes.sliderBack}>
                        <SliderCustom/>
                    </div>
                </Container>
                <div className={classes.comBut}>
                    <CustomButton text={t("actions.register")} onClick={handleRegister}/>
                </div>
            </div>
            <img src={square} alt="squares" className={classes.squares}/>
            <div className={classes.chessBg}/>
            <footer className={classes.footer} data-aos="fade-down" data-aos-duration="1500">
                <h3>{t("footer.title1")}</h3>
                <h3>{t("footer.title2")}</h3>
                <Container className={classes.topFooter}>
                    <div className={classes.footBut}>
                        <CustomButton text={t("actions.consultation")} onClick={handleRegisterConsultation}/>
                        <label>{t("footer.sub1")}</label>
                    </div>
                    <div className={classes.footBut}>
                        <CustomButton text={t("actions.train")} onClick={handleRegisterTraining}/>
                        <label>{t("footer.sub2")}</label>
                    </div>
                </Container>
                <div className={classes.footBot}>
                    <Container className={classes.footBotContainer}>
                        <div className={classes.links}>
                            <a href="https://www.instagram.com/profi_business_school/" target="_blank" rel="noreferrer nofollow">
                                <img src={inst} alt="inst"/>
                            </a>
                            <a href="https://www.facebook.com/profispaceschool/" target="_blank" rel="noreferrer nofollow">
                                <img src={fb} alt="fb"/>
                            </a>
                            <a href="https://t.me/profi_space" target="_blank" rel="noreferrer nofollow">
                                <img src={telegram} alt="tg"/>
                            </a>
                            <a href="https://www.profi-space.com/" target="_blank" rel="noreferrer nofollow">
                                <img src={globe} alt="web"/>
                            </a>
                        </div>
                        <div>
                            <SubscribeForm/>
                        </div>
                    </Container>
                </div>
            </footer>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isFetching: state.common.isFetching,
    isSuccess: state.common.isSuccess,
    currentLanguage: state.common.currentLanguage
})

export default connect(mapStateToProps, {
    setCurrentLanguage
})(Main)