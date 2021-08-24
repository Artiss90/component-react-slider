import Slider from './components/Slider/Slider';
import VerticalSlider from './components/VerticalSlider/VerticalSlider';
import Step from './components/Step/Step';
import './App.css';

function App() {
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  const onChange = e => {e.preventDefault()
  console.log(e.target.value);}
  return (
    <div className="App">
     <Slider/>
     <VerticalSlider currentIndex={3}/>
     <Step steps={steps} currentIndex={2}/>
    </div>
  );
}

export default App;
