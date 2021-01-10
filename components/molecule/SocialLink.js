import { SiGithub, SiLinkedin, SiMedium } from 'react-icons/si'
import Container from '../atom/Container'

function SocialLink(){
  return(
    <Container social>
      <a href="http://github.com/david-fernando" target="_blank" >
        <SiGithub className="icon-link" size={16} />
        &nbsp; Github
      </a>
      <a href="https://www.linkedin.com/in/david-fernando-9790311b1/" target="_blank" >
        <SiLinkedin className="icon-link" size={16} />
        &nbsp; Linkedin
      </a>
      <a href="http://medium.com/david-fernando" target="_blank" >
        <SiMedium className="icon-link" size={16} />
        &nbsp; Medium
      </a>
    </Container>
  )
}

export default SocialLink