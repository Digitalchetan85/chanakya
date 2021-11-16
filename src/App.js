import './App.scss';
import About from './Components/About/About';
import MainSlider from './Components/Includes/MainSlider';
import TopMenubar from './Components/Includes/TopMenubar';
import Courses from './Components/Courses/Courses';
import CoursesAfter from './Components/CoursesAfter/CoursesAfter';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <section className="sticky-top" id="">
        <TopMenubar />
      </section>
      <section className="" id="">
        <MainSlider />
      </section>
      <section className="pt-2 pb-2 pb-md-5" id="">
        <About />
      </section>
      <section className="pt-2 pb-2 pt-md-5 pb-md-5" id="">
        <Courses />
      </section>
      <section className="pt-2 pb-2 pt-md-5 pb-md-5" id="">
        <CoursesAfter />
      </section>
      <section className="pt-2 pb-2 pt-md-5 pb-md-5" id="">
        <Contact />
      </section>
    </div>
  );
}

export default App;
