import './App.scss';
import About from './Components/About/About';
import MainSlider from './Components/Includes/MainSlider';
import TopMenubar from './Components/Includes/TopMenubar';
import Courses from './Components/Courses/Courses';
import CoursesAfter from './Components/CoursesAfter/CoursesAfter';
import Contact from './Components/Contact/Contact';
import Gallery from './Components/Gallery/Gallery';
import Gallery1 from './Components/Gallery/Gallery1';

function App() {
  return (
    <div>
      <section className="sticky-top shadow" id="">
        <TopMenubar />
      </section>
      <section className="" id="">
        <MainSlider />
      </section>
      <section className="pt-2 pb-2 pb-md-5" id="about">
        <About />
      </section>
      <section className="pt-2 pb-2 pt-md-5 pb-md-5" id="">
        <Courses />
      </section>
      <section className="pt-2 pb-2 pt-md-5 pb-md-5 bg-light" id="">
        <CoursesAfter />
      </section>
      <section className="pt-2 pb-2 pt-md-5 pb-md-5" id="">
        <Gallery />
      </section>
      <section className="pt-2 pb-2 pt-md-5 pb-md-5 bg-light" id="gallery">
        <Gallery1 />
      </section>
      <section className="pt-2 pb-2 pt-md-5 pb-md-5" id="">
        <Contact />
      </section>
    </div>
  );
}

export default App;
