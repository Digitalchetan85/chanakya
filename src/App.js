import './App.scss';
import About from './Components/About/About';
import MainSlider from './Components/Includes/MainSlider';
import TopMenubar from './Components/Includes/TopMenubar';

function App() {
  return (
    <div>
      <section className="sticky-top" id="">
        <TopMenubar />
      </section>
      <section className="" id="">
        <MainSlider />
      </section>
      <section className="pt-2 pb-2 pt-md-5 pb-md-5" id="">
        <About />
      </section>
    </div>
  );
}

export default App;
