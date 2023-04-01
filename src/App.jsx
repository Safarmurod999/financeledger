import './App.css'
import BlogPost from "./components/BlogPost/BlogPost"
import OurTeam from "./components/OurTeam/OurTeam"
import Callback from './components/Callback/Callback'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <BlogPost/>
      <OurTeam/>
      <Callback/>
      <Footer/>
    </div>
  )
}

export default App
