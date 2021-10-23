import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { setIsSuccess } from '../../Redux/commonReducer'
import BackgroundLayout from '../UI/BackgroundLayout/BackgroundLayout'
import ModalLayout from '../UI/ModalLayout/ModalLayout'
import classes from './Thankyou.module.css'

const Thankyou = (props) => {
    const { onClick, setIsSuccess } = props

    const history = useHistory()

    const handleModal = () => {
        onClick()
        setIsSuccess(false)
        history.push("/")
    }

    const { t } = useTranslation()

    return(
        <BackgroundLayout>
            <ModalLayout onClose={handleModal} className={classes.window}>
                <p className={classes.text}>{t("thankyou")}</p>
            </ModalLayout>
        </BackgroundLayout>
    )
}

export default connect(null, {
    setIsSuccess
})(Thankyou)