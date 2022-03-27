import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import ParticleBackground from './ParticleBackground'

function App() {
  return (
    <div>
      <ParticleBackground /> 
      <h3><span class="wave"> 👋</span> Nice to meet you, I'm Vansh</h3>
      <article>I'm a Vancouver based student interested in STEM and grinding to make it big in tech.</article>          
      <h4>what I'm currently doing: </h4>      
      <p>- I regularly attend school like the good boy I am. </p>
      <p>- I'm a co-lead at my school's <a href="https://wghack.club/" target="_blank">Hack Club</a>. Our aim is to increase the number of students interested in pursuing coding by running weekly workshops and making them aware about the opportunities in the field. </p>
      <p>- My team and I are working on <a href="https://wghackclub.notion.site/WGHC-Junior-Coders-Camp-Introduction-c3a122693bd949bcb3423e81fad971cd" target="_blank">Junior Coders Camp</a>. We run week long workshops and teach coding to elementary school students in both Canada and India. </p>
      <p>- I'm building <a href="https://github.com/VanshBhandari/Viridi" target="_blank">Viridi</a>. We won "Most Launchable Hack" at <a href="https://winhacks-2022.devpost.com/" target="_blank">WinHacks</a> competing against roughly 500 college and high school students! </p>
      <p>- I'm a partnership coordinator at <a href="https://www.hackpolicy.co/" target="_blank">Hack+Policy</a>.</p>
      <p>- I'm an executive at <a href="https://youandiorg.com/" target="_blank">You and I</a>. I manage their website and help
        them tackle tech related problems. </p>
      <p>- I'm a web developer at <a href="https://stemfellowship.org/" target="_blank">STEM Fellowship</a>.</p>
      <p>- I provide <a href="https://vanshbhandari.notion.site/Tutor-Service-Vansh-Bhandari-cff9ada44182491f8912715b36ed04c4" target="_blank">tutoring</a> and write a <a href="https://vansh4k.medium.com/
    " target="_blank">tech blog</a>. </p>
      <p>I enjoy debating, reading about tech and playing video games, guitar and soccer. I'm also trying to learn how to use chopsticks. (I have poked myself in the eye thrice!)</p>          
      
      <p><a href="https://www.linkedin.com/in/vanshbhandari/" target="_blank"><FaLinkedin size={30} /></a>   <a href = "mailto: vbhandari2005@gmail.com"><MdEmail size={30}/></a>   <a href = "https://github.com/VanshBhandari"target="_blank"><FaGithub size={30}/></a></p>  
      
    </div>
  );
}

export default App;
