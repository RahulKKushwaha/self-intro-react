import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faConfluence,
  faReact
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="stage-cube-cont">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faConfluence} color="#efd81d" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJava} color="#5d87a3" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>
          </div>
        </div>

        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'y', 's', 'e', 'l', 'f']}
              idx={15}
            />
          </h1>
          <p>
            I’m self-assured, naturally inquisitive, and committed to continual improvement—constantly honing my craft and viewing every design challenge as an opportunity to refine my skills.

          </p>
          <p className="align-left">
            I’m self-assured, naturally inquisitive, and committed to continual improvement—constantly honing my craft and viewing every design challenge as an opportunity to refine my skills.

          </p>
          <p>
            If I were to describe myself in one sentence, I’d say I’m a devoted family man,
            proud father of a lovely daughter, keen sports enthusiast, photography aficionado,
            and an unabashed tech devotee.!!!
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
