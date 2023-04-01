import './App.css'
import BlogPost from "./components/BlogPost/BlogPost"
import OurTeam from "./components/OurTeam/OurTeam"
import Callback from './components/Callback/Callback'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import Cases from './components/Cases/Cases'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Cases/>
      <BlogPost/>
      <OurTeam/>
      <Callback/>
      <Footer/>
    </div>
  )
}
export default App
