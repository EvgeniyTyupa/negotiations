import { useComments } from '../../Hooks/useComments';
import classes from './Slider.module.css'
import Slider from "react-slick";

const SliderCustom = (props) => {
    const comments = useComments()
    return(
        <Slider slidesPerView={1}>
            {comments.map(item => (
                <div className={classes.comment}>
                    <p>{item.text}</p>
                </div>
            ))}
        </Slider>
    )
}

export default SliderCustom