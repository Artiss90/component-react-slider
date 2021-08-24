import ReactSlider from "react-slider";
import './Slider.scss';

export default function Slider ({ onChange, currentIndex })  {
    return (<ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        onChange={onChange}
    />)
}

