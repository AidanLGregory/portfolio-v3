import './styles/tailwind.css'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <div className="max-w-5x1 w-11/12 mx-auto">
        <Intro />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}

export default App
