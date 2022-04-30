import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaChevronDown } from 'react-icons/fa'
import { FaChevronUp } from 'react-icons/fa'
import ParticleBackground from './ParticleBackground'

function App() {
  return (
    <div>
      <ParticleBackground/> 
      <div class = "container-1" id = "section-1">
        <span class="wave"> 👋</span>Nice to meet you, I'm<span class ="name">Vansh</span>
      </div>
      <div class = "subheader">
        16 | 📌 Vancouver | Asian Tryhard | Tech Enthusiast
      </div>
      <div class = "links">
      <p><a href="https://www.linkedin.com/in/vanshbhandari/" target="_blank"><FaLinkedin size={35} /></a>   <a href = "mailto: vbhandari2005@gmail.com"><MdEmail size={35}/></a>   <a href = "https://github.com/VanshBhandari"target="_blank"><FaGithub size={35}/></a></p>  
      </div>
      <div class = "scroll-down">
        <a href='#section-2'><FaChevronDown size={35} /></a>
      </div>
      <div class = "container-2" id = "section-2">    
      </div> 
    </div>
  );
}

export default App;
