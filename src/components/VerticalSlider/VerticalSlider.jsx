import ReactSlider from "react-slider";
import './VerticalSlider.scss';

export default function VerticalSlider ({ onChange, currentIndex})  {
    return (<ReactSlider
        className="vertical-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        onChange={onChange}
        defaultValue={0}
        value={currentIndex}
        min={0}
        max={4}
        marks
        renderMark={(props) => {
          if (props.key < currentIndex) {
            props.className = "example-mark example-mark-completed";
          } else if (props.key === currentIndex) {
            props.className = "example-mark example-mark-active";
          }
          return <span {...props} />;
        }}
        orientation="vertical"
    />)
}

